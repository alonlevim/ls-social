const express           = require('express')
const bodyParser        = require('body-parser')

const port = process.env.PORT || 8081;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Start the server
app.listen(port);