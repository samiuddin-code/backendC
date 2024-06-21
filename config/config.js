const dotenv = require('dotenv');
dotenv.config();

const _config = {
    port: process.env.PORT,
    databaseURL: process.env.MONGO_CONNECTION_AS_STRING
};

module.exports = Object.freeze(_config);
