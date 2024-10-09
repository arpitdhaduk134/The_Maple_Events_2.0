const Photography = require('../models/Photography');

exports.getPhotographyByBudget = async (req, res) => {
  try {
    const { budget } = req.query;
    const photographyPackages = await Photography.find({ price: { $lte: budget } });
    res.status(200).json(photographyPackages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
