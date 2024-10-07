// controllers/venueController.js

const Venue = require('../models/Venue'); // Import the Venue model

// Controller function to get venues within a specified budget
exports.getVenuesByBudget = async (req, res) => {
  try {
    const { budget } = req.query; // Extract budget from query params

    // Find all venues with a price less than or equal to the budget
    const venues = await Venue.find({ price: { $lte: budget } });

    // Return the list of venues
    res.status(200).json(venues);
  } catch (error) {
    console.error('Error fetching venues:', error.message);
    res.status(500).json({ message: 'Error fetching venues' });
  }
};
