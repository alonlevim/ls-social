const feed = require('../models/feed');
module.exports = {
    getFeed: (req, res) => {
        feed.getFeed(req, res)
    },

    addPost: (req, res) => {
        feed.addPost(req, res)
    }
}