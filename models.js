var mongoose = require('mongoose');
var blogSchema = mongoose.Schema({
    title: { type: String, required: true },
    bodyHtml: { type: String, required: true },
    author: String,
    created: { type: Date, default: Date.now }
});

var Blog = module.exports = mongoose.model('Blog', blogSchema);