require('dotenv').config();
const jwt = require('jsonwebtoken');

const User = require('../schemas/user');


const succeededStatus = { status: "ok" };
const failedStatus = { status: "failed" };

const getToken = (user) => {
    if (user == null || typeof user._id === "undefined")
        return false;

    const secret = process.env.SECRET || 'secret';

    const token = jwt.sign({ _id: user._id }, secret, { expiresIn: '7d' });

    return token;
};

module.exports = {
    addUser: (req, res) => {
        // Verification
        if (
            typeof req.body.name === "undefined"
            ||
            req.body.name.trim() == ""
            ||
            typeof req.body.email === "undefined"
            ||
            req.body.email.trim() == ""
            ||
            !req.body.email.includes('@')
            ||
            typeof req.body.password === "undefined"
            ||
            req.body.password.trim() == ""
            ||
            req.body.password.length < 4
        ) {
            return res.status(400).json(failedStatus);
        }

        const { name, email, password } = req.body;

        // Create user
        const newUser = new User({
            name,
            email,
            password
        });

        // Save and return status
        newUser.save().then((user) => {
            const token = getToken(user);

            if(token === false) {
                throw 'Can\'t get token';
            }

            res.json({...succeededStatus, token});
        }).catch((e) => {
            res.status(400).json(failedStatus);
        });
    }
};