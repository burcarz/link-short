const mongoose = require('mongoose');

// instantiate mongo schema
const linkSchema = new mongoose.Schema({
    urlCode: String,
    shortLink: String,
    longLink: String,
    date: {
        type: String,
        default: Date.now
    }
});

module.exports = mongoose.model('Link', linkSchema);