var express = require('express');
var router = express.Router();
var controllers = require('../controllers/travel');

// travel page
router.get('/', controllers.travel);

// travel detail page
router.get('/:tripCode', controllers.travelDetails);

module.exports = router;