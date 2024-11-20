const Catalog = require('../models/Catalog');

// Create a new catalog item
exports.createCatalogItem = async (req, res) => {
  try {
    const { name, category, description, price, location, titleImage, photos, tags } = req.body;

    const newCatalog = new Catalog({
      name,
      category,
      description,
      price,
      location,
      titleImage,
      photos,
      tags,
    });

    await newCatalog.save();
    res.status(201).json({ message: 'Catalog item created successfully!', catalog: newCatalog });
  } catch (error) {
    console.error('Error creating catalog item:', error);
    res.status(500).json({ message: 'Error creating catalog item', error: error.message });
  }
};

// Fetch all catalog items
exports.getAllCatalogItems = async (req, res) => {
  try {
    const catalogItems = await Catalog.find();
    res.status(200).json(catalogItems);
  } catch (error) {
    console.error('Error fetching catalog items:', error);
    res.status(500).json({ message: 'Error fetching catalog items', error: error.message });
  }
};

// Fetch a single catalog item by ID
exports.getCatalogItemById = async (req, res) => {
  try {
    const catalogItem = await Catalog.findById(req.params.id);
    if (!catalogItem) {
      return res.status(404).json({ message: 'Catalog item not found' });
    }
    res.status(200).json(catalogItem);
  } catch (error) {
    console.error('Error fetching catalog item:', error);
    res.status(500).json({ message: 'Error fetching catalog item', error: error.message });
  }
};

// Update a catalog item by ID
exports.updateCatalogItem = async (req, res) => {
  try {
    const { name, category, description, price, location, titleImage, photos, tags } = req.body;

    const updatedCatalog = await Catalog.findByIdAndUpdate(
      req.params.id,
      {
        name,
        category,
        description,
        price,
        location,
        titleImage,
        photos,
        tags,
      },
      { new: true } // Return the updated document
    );

    if (!updatedCatalog) {
      return res.status(404).json({ message: 'Catalog item not found' });
    }
    res.status(200).json({ message: 'Catalog item updated successfully!', catalog: updatedCatalog });
  } catch (error) {
    console.error('Error updating catalog item:', error);
    res.status(500).json({ message: 'Error updating catalog item', error: error.message });
  }
};

// Delete a catalog item by ID
exports.deleteCatalogItem = async (req, res) => {
  try {
    const deletedCatalog = await Catalog.findByIdAndDelete(req.params.id);
    if (!deletedCatalog) {
      return res.status(404).json({ message: 'Catalog item not found' });
    }
    res.status(200).json({ message: 'Catalog item deleted successfully!' });
  } catch (error) {
    console.error('Error deleting catalog item:', error);
    res.status(500).json({ message: 'Error deleting catalog item', error: error.message });
  }
};
