const mongoose = require('mongoose');

const portfolioSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    eventName: { type: String, required: true },
    images: [{ type: String, required: true }],
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
