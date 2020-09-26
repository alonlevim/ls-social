const express           = require('express');
const bodyParser        = require('body-parser');
const cors              = require('cors');

const mongoose          = require('./mongoose');
const mainRouter        = require('./router');
const Authentication    = require("../controllers/Authentication");


const port = process.env.PORT || 8081;

const app = express();

app.use(cors())
app.use(bodyParser.json());


// Router
const router = express.Router();
app.use('/api', mainRouter(router));

// Rest api without verify token middleware
app.post('/login', Authentication.login);
app.post('/add-user', Authentication.addUser);

// Start the server
app.listen(port);

// Connection to Database
mongoose();