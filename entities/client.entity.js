const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let object = new Schema({
    status_item: { type: Number, require: true },
    create_date: { type: Number, required: true },
    modification_date: { type: Number, required: true },
    maker: { type: String, required: true },
    name: String,
    description: String,
    resenadurapiso: { type: String, default: "En proceso. " },
    imgurl: String
});

let products = mongoose.model('durapiso.clients', object);
module.exports = products;