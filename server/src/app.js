const express           = require('express');
const bodyParser        = require('body-parser');
const mainRouter        = require('./router');

const port = process.env.PORT || 8081;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
const router = express.Router();
app.use('/api', mainRouter(router));

// Start the server
app.listen(port);