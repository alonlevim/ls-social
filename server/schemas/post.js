const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author: { type: Schema.Types.ObjectId, required: true },
    title: { type: String, require: true, trim: true },
    description: { type: String, require: true, trim: true },
    image: { type: String, trim: true },
    createdAt: { type: Date, require: true },
    updatedAt: { type: Date }
});

module.exports = mongoose.model('Post', PostSchema);