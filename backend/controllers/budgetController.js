const Catalog = require('../models/Catalog');

exports.calculateBudget = async (req, res) => {
  try {
    const { category, allocations } = req.body;

    // Prepare queries for each type
    const queries = {
      venue: { type: 'venue', price: { $lte: allocations.venue || Number.MAX_VALUE } },
      catering: { type: 'catering', pricePerGuest: { $lte: allocations.catering || Number.MAX_VALUE } },
      decorations: { type: 'decorations', price: { $lte: allocations.decorations || Number.MAX_VALUE } },
      entertainment: { type: 'entertainment', price: { $lte: allocations.entertainment || Number.MAX_VALUE } },
      photography: { type: 'photography', price: { $lte: allocations.photography || Number.MAX_VALUE } },
      transportation: { type: 'transportation', pricePerHour: { $lte: allocations.transportation || Number.MAX_VALUE } },
      stationery: { type: 'stationery', pricePerPiece: { $lte: allocations.stationery || Number.MAX_VALUE } },
    };

    // Add category filter if provided
    if (category) {
      for (const key in queries) {
        queries[key].tags = category;
      }
    }

    // Fetch matching results for each service type
    const [venues, cateringOptions, decorations, entertainments, photographyPackages, transportationOptions, stationeryItems] = await Promise.all([
      Catalog.find(queries.venue),
      Catalog.find(queries.catering),
      Catalog.find(queries.decorations),
      Catalog.find(queries.entertainment),
      Catalog.find(queries.photography),
      Catalog.find(queries.transportation),
      Catalog.find(queries.stationery),
    ]);

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
