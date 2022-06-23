const mongoose = require('mongoose');

// declare db URI
const DB_URI = 'mongodb://localhost:27017/linkshort';

// establish db connect
mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection;

// export connection obj
module.exports = connection;