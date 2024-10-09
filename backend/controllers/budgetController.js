const Venue = require('../models/Venue');
const Catering = require('../models/Catering');
const Decorations = require('../models/Decorations');
const Entertainment = require('../models/Entertainment');
const Photography = require('../models/Photography');
const Transportation = require('../models/Transportation');
const Stationery = require('../models/Stationery');

exports.calculateBudget = async (req, res) => {
  try {
    const { category, allocations } = req.body;

    console.log('Received Allocations:', allocations);
    console.log('Received Category:', category);

    const venueBudget = allocations.venue || Number.MAX_VALUE;
    const cateringBudget = allocations.catering || Number.MAX_VALUE;
    const decorationsBudget = allocations.decorations || Number.MAX_VALUE;
    const entertainmentBudget = allocations.entertainment || Number.MAX_VALUE;
    const photographyBudget = allocations.photography || Number.MAX_VALUE;
    const transportationBudget = allocations.transportation || Number.MAX_VALUE;
    const stationeryBudget = allocations.stationery || Number.MAX_VALUE;

    console.log('Budgets parsed:', {
      venueBudget,
      cateringBudget,
      decorationsBudget,
      entertainmentBudget,
      photographyBudget,
      transportationBudget,
      stationeryBudget,
    });

    const venues = await Venue.find({
      price: { $lte: venueBudget },
      ...(category ? { tags: category } : {})
    });

    const cateringOptions = await Catering.find({
      pricePerGuest: { $lte: cateringBudget },
      ...(category ? { tags: category } : {})
    });

    const decorations = await Decorations.find({
      price: { $lte: decorationsBudget },
      ...(category ? { tags: category } : {})
    });

    const entertainments = await Entertainment.find({
      price: { $lte: entertainmentBudget },
      ...(category ? { tags: category } : {})
    });

    const photographyPackages = await Photography.find({
      price: { $lte: photographyBudget },
      ...(category ? { tags: category } : {})
    });

    const transportationOptions = await Transportation.find({
      pricePerHour: { $lte: transportationBudget },
      ...(category ? { tags: category } : {})
    });

    const stationeryItems = await Stationery.find({
      pricePerPiece: { $lte: stationeryBudget },
      ...(category ? { tags: category } : {})
    });

    res.status(200).json({
      success: true,
      data: {
        venues,
        cateringOptions,
        decorations,
        entertainments,
        photographyPackages,
        transportationOptions,
        stationeryItems,
      },
    });
  } catch (error) {
    console.error('Error during budget calculation:', error);
    res.status(500).json({ message: error.message });
  }
};
