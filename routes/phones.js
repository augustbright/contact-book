const mongoose = require('mongoose');
const Express = require('express');
const phones = new Express.Router();
const Phone = mongoose.model('phones');

phones.get('/', async (req, res) => {
    //get all phones
    const phones = await Phone.find({});
    res.json(phones);
});

phones.get('/:id', async (req, res) => {
    //get phone by id
    const {id} = req.params;
    const phone = await Phone.findById(id);
    res.json(phone);
});

phones.put('/', async (req, res) => {
    //add phone to base
    const {number, name} = req.body;
    await new Phone({number, name}).save();
    res.end();
});

phones.post('/:id', async (req, res) => {
    //update phone data by id
    const {id} = req.params;
    const {name, number} = req.body;
    await Phone.findByIdAndUpdate(id, {name, number});
    res.end();
});

phones.delete('/:id', async (req, res) => {
    //delete phone by id from base
    const {id} = req.params;
    await Phone.findByIdAndDelete(id);
    res.end();
});

module.exports = phones;