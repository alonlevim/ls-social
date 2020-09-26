const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, require: true, trim: true },
    password: { type: String, required: true }
});

module.exports = mongoose.model('User', UserSchema);