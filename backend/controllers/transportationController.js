const Transportation = require('../models/Transportation');

exports.getTransportationByBudget = async (req, res) => {
  try {
    const { budgetPerHour } = req.query;
    const transportationOptions = await Transportation.find({ pricePerHour: { $lte: budgetPerHour } });
    res.status(200).json(transportationOptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Additional controller functions as needed
