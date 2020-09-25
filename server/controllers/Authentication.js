const authentication = require('../models/authentication');

module.exports = {
    login: (req, res) => {
        authentication.login(req, res);
    },

    addUser: (req, res) => {
        authentication.addUser(req, res);
    },

    verifyAuth: (req, res, next) => {
        authentication.verifyAuth(req, res, next);
    }
};