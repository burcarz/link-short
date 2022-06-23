const express = require('express');
const app = express();

// database config
const connection = require('./config/db');
connection.once('open', () => console.log('db connected'));
connection.on('error', () => console.log('error'));

// routes config
app.use(express.json({
    extended: false
})) // parse incoming req in json
app.use('/', require('./routes/redirect'));
app.use('/api/url', require('./routes/link'));

// listen
const PORT = process.env.PORT || 3001
app.listen(PORT, console.log(`server started, listening on port ${PORT}`));