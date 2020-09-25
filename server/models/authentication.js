require('dotenv').config();
const jwt = require('jsonwebtoken');

const User = require('../schemas/user');


const succeededStatus = { status: "ok" };
const failedStatus = { status: "failed" };

const getSecret = () => {
    return process.env.SECRET || 'secret';
}

const getToken = (user) => {
    if (user == null || typeof user._id === "undefined")
        return false;

    const secret = getSecret();

    const token = jwt.sign({ _id: user._id }, secret, { expiresIn: '7d' });

    return token;
};

const decodedToken = (token) => {
    const secret = getSecret();

    try {
        return jwt.verify(token, secret);
    } catch (err) {
        return false;
    }
};

const tokenVerification = (token) => {
    if( token == null || typeof token !== "string" || token.trim().length < 50 ) {
        return false;
    }

    decoded = decodedToken(token);

    return decoded !== false;
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

            if (token === false) {
                throw 'Can\'t get token';
            }

            res.json({ ...succeededStatus, token });
        }).catch((e) => {
            res.status(400).json(failedStatus);
        });
    },

    verifyAuth: (req, res, next) => {
        if( typeof req.headers['authorization'] === "undefined"
        ||
        req.headers['authorization'].trim() === ""
        ||
        !req.headers['authorization'].includes('bearer')
        ) {
            return res.status(400).json(failedStatus);
        }

        const authorizationHeader = req.headers['authorization'];

        // After bearer
        const token = authorizationHeader.split(" ")[1];

        // Succeeded
        if(tokenVerification(token)) {
            next();
        }
        // failed
        else {
            res.status(400).json(failedStatus);
        }

    }
};