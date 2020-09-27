const feed = require('../models/feed');
module.exports = {
    getFeed: (req, res) => {
        feed.getFeed(req, res)
    },

    addPost: (req, res) => {
        feed.addPost(req, res)
    },

    updatePost: (req, res) => {
        feed.updatePost(req, res)
    },

    deletePost: (req, res) => {
        feed.deletePost(req, res)
    },

    toggleLikePost: (req, res) => {
        feed.toggleLikePost(req, res)
    }
}