const express = require('express');
const router = express.Router();
const catalogController = require('../controllers/catalogController');

// CRUD operations for Catalog
router.post('/', catalogController.createCatalogItem);
router.get('/', catalogController.getAllCatalogItems);
router.get('/:id', catalogController.getCatalogItemById);
router.put('/:id', catalogController.updateCatalogItem);
router.delete('/:id', catalogController.deleteCatalogItem);

module.exports = router;
