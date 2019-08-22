const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let object = new Schema({
    status_item: { type: Number, require: true },
    create_date: { type: Number, required: true },
    modification_date: { type: Number, required: true },
    maker: { type: String, required: true },
    name: { type: String, required: true },
    description: String,
    pathurl: { type: String, required: true }
});

let users = mongoose.model('durapiso.downloads', object);
module.exports = users;