require('dotenv').config();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../schemas/user');


const succeededStatus = { status: "ok" };
const failedStatus = { status: "failed" };
const minLengthPassword = 4;

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
    if (token == null || typeof token !== "string" || token.trim().length < 50) {
        return false;
    }

    decoded = decodedToken(token);

    return decoded !== false;
};

const cryptographic = (password) => crypto.createHmac('sha256', password)
    .digest('hex');

module.exports = {
    login: (req, res) => {
        // Verification
        if (
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
            req.body.password.length < minLengthPassword
        ) {
            return res.status(400).json(failedStatus);
        }

        const { email, password } = req.body;
        const cryptographicPassword = cryptographic(password);

        User.findOne({ email, password: cryptographicPassword }, (err, user) => {
            if( err ) {
                return res.status(400).json(failedStatus);
            }

            // Get token by id
            const token = getToken(user);

            // Can't get token
            if (token === false) {
                return res.status(400).json(failedStatus);
            }

            // Return succeed status with new token
            res.json({ ...succeededStatus, token });
        });
    },

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
            req.body.password.length < minLengthPassword
        ) {
            return res.status(400).json(failedStatus);
        }

        const { name, email, password } = req.body;

        // Create user
        const newUser = new User({
            name,
            email,
            password: cryptographic(password)
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
        if (typeof req.headers['authorization'] === "undefined"
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
        if (tokenVerification(token)) {
            next();
        }
        // failed
        else {
            res.status(400).json(failedStatus);
        }

    }
};