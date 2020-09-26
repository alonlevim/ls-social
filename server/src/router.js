const Authentication = require("../controllers/Authentication");
const Feed = require("../controllers/Feed");
const uploadFileToAWS = require('../services/upload');

const singleUpload = uploadFileToAWS.single('image');

module.exports = (router) => {
    // Middleware
    router.use(Authentication.verifyAuth);

    router.get('/feed', Feed.getFeed);

    router.post('/add-post', singleUpload, Feed.addPost);

    return router;
};