const Venue = require('../models/Venue');

exports.getVenuesByBudget = async (req, res) => {
  try {
    const { budget } = req.query;
    const venues = await Venue.find({ price: { $lte: budget } });
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
