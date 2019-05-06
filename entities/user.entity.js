const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let object = new Schema({
    status_item: { type: Number, require: true },
    create_date: { type: Number, required: true },
    modification_date: { type: Number, required: true },
    maker: { type: String, required: true },
    name: String,
    email: String,
    password: String,
    description: Number,
    imgurl: String
});

let users = mongoose.model('durapiso.users', object);
module.exports = users;