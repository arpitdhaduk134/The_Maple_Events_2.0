const Decorations = require('../models/Decorations');

exports.getDecorationsByBudget = async (req, res) => {
  try {
    const { budget } = req.query;
    const decorations = await Decorations.find({ price: { $lte: budget } });
    res.status(200).json(decorations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
