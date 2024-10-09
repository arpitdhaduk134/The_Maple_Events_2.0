const Catering = require('../models/Catering');

exports.getCateringByBudget = async (req, res) => {
  try {
    const { budgetPerGuest } = req.query;
    const caterings = await Catering.find({ pricePerGuest: { $lte: budgetPerGuest } });
    res.status(200).json(caterings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
