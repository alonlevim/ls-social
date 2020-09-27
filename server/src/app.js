const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

const mongoose = require('./mongoose');
const mainRouter = require('./router');
const Authentication = require("../controllers/Authentication");


const port = process.env.PORT || 8081;

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')));


// Router
const router = express.Router();
app.use('/api', mainRouter(router));

// Rest api without verify token middleware
app.post('/login', Authentication.login);
app.post('/add-user', Authentication.addUser);

// Single page application
app.get('/*', (req, res) => {
    res.sendFile(`${process.cwd()}/dist/index.html`)
});

// Catch 404
app.use(function (req, res, next) {
    res.status(404).send("Sorry can't find that!")
});

// Start the server
app.listen(port);

// Connection to Database
mongoose();