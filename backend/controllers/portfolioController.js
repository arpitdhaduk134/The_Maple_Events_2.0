const Portfolio = require('../models/Portfolio');

// Helper to prepend image paths
const prependImagePaths = (item) => ({
  ...item._doc,
  titleImage: item.titleImage ? `http://localhost:5000${item.titleImage}` : null,
  images: item.images.map((image) => `http://localhost:5000${image}`),
});

// CREATE
exports.createPortfolio = async (req, res) => {
  try {
    const { title, description, eventName } = req.body;
    const titleImagePath = req.files['titleImage']
      ? `/uploads/portfolio/${req.files['titleImage'][0].filename}`
      : null;

    const imagePaths = req.files['images']
      ? req.files['images'].map((file) => `/uploads/portfolio/${file.filename}`)
      : [];

    const newPortfolio = new Portfolio({
      title,
      description,
      eventName,
      titleImage: titleImagePath,
      images: imagePaths,
    });

    await newPortfolio.save();
    res.status(201).json({
      message: 'Portfolio item created successfully!',
      data: prependImagePaths(newPortfolio),
    });
  } catch (error) {
    console.error('Error creating portfolio:', error);
    res.status(500).json({ message: 'Error creating portfolio', error });
  }
};

// READ: Get all portfolios
exports.getAllPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find();
    res.status(200).json(portfolios.map(prependImagePaths));
  } catch (error) {
    console.error('Error fetching portfolios:', error);
    res.status(500).json({ message: 'Error fetching portfolios', error });
  }
};
