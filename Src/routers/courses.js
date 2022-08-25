const express = require('express');
const { index } = require('../app/controllers/CourseController');

const router = express.Router();

const courseController = require('../app/controllers/CourseController');

// courseController.index

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:slug', courseController.show);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.delete('/:id/force', courseController.deleteForce);
router.get('/:id/edit', courseController.edit);

module.exports = router;
