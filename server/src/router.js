const Authentication = require("../controllers/Authentication");
const Feed = require("../controllers/Feed");
const { upload } = require('../services/upload');

const singleUpload = upload.single('image');

module.exports = (router) => {
    // Middleware
    router.use(Authentication.verifyAuth);

    router.get('/feed', Feed.getFeed);

    router.post('/add-post', singleUpload, Feed.addPost);
    router.put('/update-post', singleUpload, Feed.updatePost);
    router.delete('/delete-post/:_id', Feed.deletePost);

    return router;
};