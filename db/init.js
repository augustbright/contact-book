const mongoose = require('mongoose');
require('./models');
const MONGO_URI = process.env.NODE_MONGO_URI;

module.exports = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log(`Successfully connected to mongo`);
    } catch (error) {
        console.error(`Error connection to Mongo`, error);
    }
};