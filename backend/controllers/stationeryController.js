const Stationery = require('../models/Stationery');

exports.getStationeryByBudget = async (req, res) => {
  try {
    const { budgetPerPiece } = req.query;
    const stationeryItems = await Stationery.find({ pricePerPiece: { $lte: budgetPerPiece } });
    res.status(200).json(stationeryItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Additional controller functions as needed
