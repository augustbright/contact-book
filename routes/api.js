const Express = require('express');
const phones = require('./phones');
const api = new Express.Router();

api.use('/phones', phones);

module.exports = api;
