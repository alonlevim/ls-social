const authentication = require('../models/authentication');

module.exports = {
    addUser: (req, res) => {
        authentication.addUser(req, res);
    }
};