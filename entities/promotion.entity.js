const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let object = new Schema({
    status_item: { type: Number, require: true },
    create_date: { type: Number, required: true },
    modification_date: { type: Number, required: true },
    maker: { type: String, required: true },
    name: { type: String, required: true },
    imgurl: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
    offerprice: { type: String, required: true },
    start_date: { type: Number, required: true },
    end_date: { type: Number, required: true }
});

let promotions = mongoose.model('durapiso.promotions', object);
module.exports = promotions;