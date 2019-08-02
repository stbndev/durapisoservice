const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let object = new Schema({
    status_item: { type: Number, require: true },
    create_date: { type: Number, required: true },
    modification_date: { type: Number, required: true },
    maker: { type: String, required: true },
    description: String,
    imgurl: String,
    name: String,
    lastname: String,
    email: String,
    mobil: String,
    feedback: String
});

let clients = mongoose.model('durapiso.clients', object);
module.exports = clients;