const Authentication = require("../controllers/Authentication");
const Feed = require("../controllers/Feed");

module.exports = (router) => {
    // Middleware
    router.use(Authentication.verifyAuth);

    router.get('/feed', Feed.getFeed);

    return router;
};