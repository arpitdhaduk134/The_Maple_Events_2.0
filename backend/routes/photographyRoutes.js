const express = require('express');
const { getPhotographyByBudget } = require('../controllers/photographyController');
const router = express.Router();

router.get('/', getPhotographyByBudget);

module.exports = router;
