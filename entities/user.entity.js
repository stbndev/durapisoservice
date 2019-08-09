const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let object = new Schema({
    status_item: { type: Number, require: true },
    create_date: { type: Number, required: true },
    modification_date: { type: Number, required: true },
    maker: { type: String, required: true },
    name: String,
    email: { type: String, required: true },
    password: { type: String, required: true },
    description: String,
    imgurl: String
});

let users = mongoose.model('durapiso.users', object);
module.exports = users;