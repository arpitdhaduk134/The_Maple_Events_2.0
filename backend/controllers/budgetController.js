const Venue = require('../models/Venue');
const Catering = require('../models/Catering');
const Decorations = require('../models/Decorations');
const Entertainment = require('../models/Entertainment');
const Photography = require('../models/Photography');
const Transportation = require('../models/Transportation');
const Stationery = require('../models/Stationery');

exports.calculateBudget = async (req, res) => {
  try {
    const { allocations } = req.body;

    // Fetch services within their respective budgets
    const venues = await Venue.find({ price: { $lte: allocations.venue } });
    const cateringOptions = await Catering.find({ pricePerGuest: { $lte: allocations.catering } });
    const decorations = await Decorations.find({ price: { $lte: allocations.decorations } });
    const entertainment = await Entertainment.find({ price: { $lte: allocations.entertainment } });
    const photographyPackages = await Photography.find({ price: { $lte: allocations.photography } });
    const transportationOptions = await Transportation.find({ pricePerHour: { $lte: allocations.transportation } });
    const stationeryItems = await Stationery.find({ pricePerPiece: { $lte: allocations.stationery } });

    res.status(200).json({
      success: true,
      data: {
        venues,
        cateringOptions,
        decorations,
        entertainment,
        photographyPackages,
        transportationOptions,
        stationeryItems,
      },
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
