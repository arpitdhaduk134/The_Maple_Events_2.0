const Catalog = require('../models/Catalog');

// Function to prepend image paths
const prependImagePaths = (item) => ({
  ...item._doc,
  titleImage: item.titleImage?.startsWith('/uploads') 
    ? `http://localhost:5000${item.titleImage}` 
    : item.titleImage, // Only prepend if not already prepended
  photos: item.photos
    ? item.photos.map((photo) =>
        photo.startsWith('/uploads') ? `http://localhost:5000${photo}` : photo
      )
    : [],
});
exports.calculateBudget = async (req, res) => {
  try {
    const { category, allocations } = req.body;

    const queries = {
      venue: { category: 'Venue', price: { $lte: allocations.venue || Number.MAX_VALUE } },
      catering: { category: 'Catering', price: { $lte: allocations.catering || Number.MAX_VALUE } },
      decorations: { category: 'Decorations', price: { $lte: allocations.decorations || Number.MAX_VALUE } },
      entertainment: { category: 'Entertainment', price: { $lte: allocations.entertainment || Number.MAX_VALUE } },
      photography: { category: 'Photography', price: { $lte: allocations.photography || Number.MAX_VALUE } },
      transportation: { category: 'Transportation', price: { $lte: allocations.transportation || Number.MAX_VALUE } },
      stationery: { category: 'Stationery', price: { $lte: allocations.stationery || Number.MAX_VALUE } },
    };

    if (category) {
      for (const key in queries) {
        queries[key].tags = category;
      }
    }

    const results = await Promise.all([
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
        venues: results[0].map(prependImagePaths),
        catering: results[1].map(prependImagePaths),
        decorations: results[2].map(prependImagePaths),
        entertainment: results[3].map(prependImagePaths),
        photography: results[4].map(prependImagePaths),
        transportation: results[5].map(prependImagePaths),
        stationery: results[6].map(prependImagePaths),
      },
    });
  } catch (error) {
    console.error('Error during budget calculation:', error);
    res.status(500).json({ message: error.message });
  }
};
