const Authentication = require('../controllers/Authentication');
const post = require('../schemas/post');
const user = require('../schemas/user');
const helper = require('../helper');
const { deleteFile } = require('../services/upload');

const getFeed = async (req, res) => {
    const userId = Authentication.returnIdByToken(req);
    

    post.find().sort({ field: 'asc', createdAt: -1 }).then(async (posts) => {
        // Join user name by id
        const newPosts = await Promise.all(posts.map(async post => {

            // Get name author
            const author = await user.findById(post.author).then(user => !!user ? user.name : "Unknown");
            // Set in new object
            const newObjPost = {
                _id: post._id,
                author,
                title: post.title,
                description: post.description,
                createdAt: post.createdAt,
                admin: userId == post.author
            };

            if (post.updatedAt)
                newObjPost.updatedAt = post.updatedAt;

            if (post.image) {
                newObjPost.image = post.image;
                newObjPost.keyImage = post.keyImage;
            }

            return newObjPost;
        }));

        res.json(newPosts);
    }).catch((err) => {
        res.status(400).json({ message: "Can't get feed" });
    });
};

module.exports = {
    getFeed,

    addPost: (req, res) => {
        // Validation - title must to be existing and not empty
        if (
            typeof req.body.title === "undefined"
            ||
            req.body.title == null
            ||
            req.body.title.trim() == ""
        ) {
            return res.status(400).json({ message: "Missing details" });
        }

        const userId = Authentication.returnIdByToken(req);

        if (!userId) {
            return res.status(400).json(helper.failedStatus);
        }

        const { title, description } = req.body;

        const postObj = {
            author: userId,
            title,
            description,
            createdAt: new Date(),
        };

        if (req.file && typeof req.file.location !== "undefined") {
            postObj.image = req.file.location;
            postObj.keyImage = req.file.key;
        }

        const newPost = new post(postObj);

        // Save and return all posts
        newPost.save().then((post) => {
            getFeed(req, res);
        }).catch((e) => {
            res.status(400).json(helper.failedStatus);
        });
    },

    updatePost: async (req, res) => {
        const userId = Authentication.returnIdByToken(req);
        // Only author can update this post
        if( await post.findOne({_id: req.body._id, author: userId}).catch(err=> null) === null ) {
            // this user can't update this post
            return res.status(400).json(helper.failedStatus);
        }

        let deletedImage = false;

        if (
            (typeof req.body.deletePhoto !== "undefined" && req.body.deletePhoto === "true")
            ||
            (req.file && typeof req.file.location !== "undefined")
        ) {
            if (await !deleteFile(req.body.keyImage)) {
                return res.status(400).json({ message: "Can't delete image." });
            }

            deletedImage = true;
        }

        const updatePostObj = {
            updatedAt: new Date(),
        };

        if (deletedImage) {
            if (req.file && typeof req.file.location !== "undefined") {
                updatePostObj.image = req.file.location;
                updatePostObj.keyImage = req.file.key;
            }
            else {
                updatePostObj.image = null;
                updatePostObj.keyImage = null;
            }
        }

        if (typeof req.body.title !== "undefined") {
            updatePostObj.title = req.body.title;
        }

        if (typeof req.body.description !== "undefined") {
            updatePostObj.description = req.body.description;
        }

        post.updateOne({ _id: req.body._id }, updatePostObj).then((post) => {
            getFeed(req, res);
        }).catch((e) => {
            res.status(400).json(helper.failedStatus);
        });
    },

    deletePost: async (req, res) => {
        const id = req.params._id;
        const userId = Authentication.returnIdByToken(req);

        // Only author can delete this post
        if( await post.findOne({_id: id, author: userId}).catch(err=> null) === null ) {
            // this user can't delete this post
            return res.status(400).json(helper.failedStatus);
        }

        // Key image to delete it from aws
        const keyImage = await post.findById(id).then(post => post.keyImage);
        
        // Delete image
        if (await !deleteFile(keyImage)) {
            return res.status(400).json({ message: "Can't delete image." });
        }

        post.deleteOne({ _id: req.params._id }).then(() => {
            getFeed(req, res);
        }).catch((e) => {
            res.status(400).json(helper.failedStatus);
        });
    }
};