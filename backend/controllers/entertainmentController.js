const Entertainment = require('../models/Entertainment');

exports.getEntertainmentByBudget = async (req, res) => {
  try {
    const { budget } = req.query;
    const entertainments = await Entertainment.find({ price: { $lte: budget } });
    res.status(200).json(entertainments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
