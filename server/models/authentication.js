require('dotenv').config();
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const User = require('../schemas/user');
const helper = require('../helper');

const minLengthPassword = 4;

const failedRequest = (req, res) => {
    req.session.destroy();
    return res.status(400).json(helper.failedStatus);
}

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

const checkValidationTokenInReq = (req, res) => {
    if (typeof req.session === "undefined" || typeof req.session.token !== "string" || req.session.token.trim().length < 50 || !tokenVerification(req.session.token)) {
        return failedRequest(req, res);
    }

    return true;
}

module.exports = {
    login: (req, res) => {
        // Validation
        if (
            typeof req.body.email === "undefined"
            ||
            req.body.email == null
            ||
            req.body.email.trim() == ""
            ||
            !req.body.email.includes('@')
            ||
            typeof req.body.password === "undefined"
            ||
            req.body.password == null
            ||
            req.body.password.trim() == ""
            ||
            req.body.password.length < minLengthPassword
        ) {
            return failedRequest(req, res);
        }

        const { email, password } = req.body;
        const cryptographicPassword = cryptographic(password);

        User.findOne({ email: email.toLowerCase(), password: cryptographicPassword }, (err, user) => {
            if (err || !user) {
                return failedRequest(req, res);
            }

            // Get token by id
            const token = getToken(user);

            // Can't get token
            if (token === false) {
                return failedRequest(req, res);
            }

            req.session.token = token;
            // Return succeed status
            res.json({ ...helper.succeededStatus });
        });
    },

    addUser: (req, res) => {
        // Validation
        if (
            typeof req.body.name === "undefined"
            ||
            req.body.name == null
            ||
            req.body.name.trim() == ""
            ||
            typeof req.body.email === "undefined"
            ||
            req.body.email == null
            ||
            req.body.email.trim() == ""
            ||
            !req.body.email.includes('@')
            ||
            typeof req.body.password === "undefined"
            ||
            req.body.password == null
            ||
            req.body.password.trim() == ""
            ||
            req.body.password.length < minLengthPassword
        ) {
            return failedRequest(req, res);
        }

        const { name, email, password } = req.body;

        // Create user
        const newUser = new User({
            name,
            email: email.toLowerCase(),
            password: cryptographic(password)
        });

        // Save and return status
        newUser.save().then((user) => {
            const token = getToken(user);

            if (token === false) {
                throw 'Can\'t get token';
            }

            req.session.token = token;
            res.json({ ...helper.succeededStatus });
        }).catch((e) => {
            return failedRequest(req, res);
        });
    },

    verifyAuth: async (req, res, next) => {
        // Validation token from req
        const validationTokenInReq = checkValidationTokenInReq(req, res);
        if (validationTokenInReq !== true) {
            return validationTokenInReq;
        }

        const token = req.session.token;

        const decoded = decodedToken(token);

        if (typeof decoded === "undefined" || decoded === null || typeof decoded._id !== "string") {
            return failedRequest(req, res);
        }

        // check in db
        const isThereUser = await User.findById(decoded._id).then(value => value !== null);

        if (!isThereUser) {
            return failedRequest(req, res);
        }

        // Succeeded
        next();
    },

    returnIdByToken: (req, res) => {
        // Validation token from req
        const validationTokenInReq = checkValidationTokenInReq(req, res);
        if (validationTokenInReq !== true) {
            return validationTokenInReq;
        }

        const token = req.session.token;

        const decoded = decodedToken(token);

        if (typeof decoded === "undefined" || typeof decoded._id !== "string") {
            return failedRequest(req, res);
        }

        return decoded._id;
    }
};
