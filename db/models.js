const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const PhoneSchema = Schema({
    name: String,
    number: String
});

model('phones', PhoneSchema);
