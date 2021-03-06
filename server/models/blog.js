const mongoose = require('mongoose');

const BlogSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    dateCreated: {
        type: String,
        require: true
    },
    body: {
        type: String,
        require: true
    }
});

module.exports = mongoose.model('Blog', BlogSchema);