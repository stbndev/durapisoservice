const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let object = new Schema({
    status_item: { type: Number, require: true },
    create_date: { type: Number, required: true },
    modification_date: { type: Number, required: true },
    maker: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    pathurl: String
});

let jobs = mongoose.model('durapiso.jobs', object);
module.exports = jobs;