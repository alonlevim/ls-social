const User = require('../schemas/user');

const succeededStatus = { status: "ok" };
const failedStatus = { status: "failed" };

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
        newUser.save().then(() => {
            res.json(succeededStatus);
        }).catch(() => {
            res.status(400).json(failedStatus);
        });
    }
};