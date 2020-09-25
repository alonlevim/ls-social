const express           = require('express');
const bodyParser        = require('body-parser');
const cors              = require('cors');
const mongoose          = require('mongoose');
const mainRouter        = require('./router');
const Authentication = require("../controllers/Authentication");

const port = process.env.PORT || 8081;
const databaseName = 'ls-social';

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
const router = express.Router();
app.use('/api', mainRouter(router));

// Rest api without verify token middleware
app.post('/add-user', Authentication.addUser);

// Start the server
app.listen(port);

// Connection to Database
mongoose.connect(`mongodb://localhost/${databaseName}`, { useNewUrlParser: true, useUnifiedTopology: true });