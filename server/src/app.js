const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const session = require('express-session');

const mongoose = require('./mongoose');
const mainRouter = require('./router');
const Authentication = require("../controllers/Authentication");


const port = process.env.PORT || 8081;

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {}
}));

const dyn = createDynStatic(path.join(__dirname, '../', 'public', 'login'))
app.use(dyn);


// Router
const router = express.Router();
app.use('/api', mainRouter(router));

// Rest api without verify token middleware
app.post('/logout', (req, res) => {
    req.session.destroy();
    res.end();
});
app.post('/login', Authentication.login);
app.post('/add-user', Authentication.addUser);

// Single page application
app.get('*', (req, res) => {
    if (req.session.token) {
        dyn.setPath(path.join(__dirname, '../', 'public', 'dist'));
        return res.sendFile(`${process.cwd()}/public/dist/index2.html`);
    }
    else {
        dyn.setPath(path.join(__dirname, '../', 'public', 'login'));
        req.session.destroy();
        return res.sendFile(`${process.cwd()}/public/login/index2.html`);
    }
});

function createDynStatic(path) {
    let static = express.static(path)
    const dyn = function (req, res, next) {
        return static(req, res, next)
    }
    dyn.setPath = function (newPath) {
        static = express.static(newPath)
    }
    return dyn
}

// Catch 404
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

// Start the server
app.listen(port);

// Connection to Database
mongoose();