const express = require('express');
const { index } = require('../app/controllers/NewsController');

const router = express.Router();

const newsController = require('../app/controllers/NewsController');

// newsController.index

router.get('/:slug', newsController.show);
router.get('/', newsController.index);

module.exports = router;
