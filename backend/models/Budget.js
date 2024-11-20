const mongoose = require('mongoose');

const BudgetSchema = new mongoose.Schema({
    eventType: { type: String, required: true },
    numberOfGuests: { type: Number, required: true },
    baseCost: { type: Number, required: true },
    estimatedCost: { type: Number },
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Budget", BudgetSchema);
