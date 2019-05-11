const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let object = new Schema({
    status_item: { type: Number, require: true },
    create_date: { type: Number, required: true },
    modification_date: { type: Number, required: true },
    maker: { type: String, required: true },
    name: String,
    description: String,
    stock : Number,
    cost : Number,
    sale : Number,
    iva : Number,
    imgurl: String
});

let products = mongoose.model('durapiso.products', object);
module.exports = products;