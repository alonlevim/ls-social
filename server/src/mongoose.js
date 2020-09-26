const db = require('mongoose');
require('dotenv').config();

const databaseURL = process.env.DB_URL || 'mongodb://localhost/some-path';

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    autoIndex: true,
    keepAlive: true,
    poolSize: 10,
    bufferMaxEntries: 0,
    connectTimeoutMS: 10000,
    socketTimeoutMS: 45000,
    family: 4,
    useFindAndModify: false,
    useUnifiedTopology: true
}

module.exports = () => db.connect(databaseURL, options);