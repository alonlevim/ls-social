const Authentication = require('../controllers/Authentication');
const post = require('../schemas/post');
const user = require('../schemas/user');
const helper = require('../helper');

const getFeed = async (req, res) => {
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
                createdAt: post.createdAt
            };

            if (post.updatedAt)
                newObjPost.updatedAt = post.updatedAt;

            if (post.image)
                newObjPost.image = post.image;

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
        }

        const newPost = new post(postObj);

        // Save and return all posts
        newPost.save().then((post) => {
            getFeed(req, res);
        }).catch((e) => {
            res.status(400).json(helper.failedStatus);
        });
    }
};