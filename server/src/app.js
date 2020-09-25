const express           = require('express');
const bodyParser        = require('body-parser');
const cors              = require('cors');
const mongoose          = require('mongoose');
const mainRouter        = require('./router');

const port = process.env.PORT || 8081;
const databaseName = 'ls-social';

const app = express();

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Router
const router = express.Router();
app.use('/api', mainRouter(router));

// Start the server
app.listen(port);

// Connection to Database
mongoose.connect(`mongodb://localhost/${databaseName}`, { useNewUrlParser: true, useUnifiedTopology: true });