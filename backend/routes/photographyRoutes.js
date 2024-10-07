const express = require('express');
const { getPhotographyByBudget } = require('../controllers/photographyController');
const router = express.Router();

// GET: Retrieve photography and videography options within a specific budget
router.get('/', getPhotographyByBudget);

// Additional CRUD routes can go here

module.exports = router;
