const mongoose = require('mongoose');

const catalogSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    location: { type: String, required: true },
    titleImage: { type: String, required: true },
    photos: [{ type: String }],
    tags: [{ type: String }],
});

module.exports = mongoose.model("Catalog", catalogSchema);
