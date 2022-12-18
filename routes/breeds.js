const express = require('express');
const {
	getAllBreeds,
	getOneBreed,
} = require('../controllers/breedsController.js');

const router = express.Router();

router.get('/', getAllBreeds);
router.get('/:id', getOneBreed);

// router.post('/', createWorkout);
// router.delete('/:id', deleteWorkout);
// router.patch('/:id', updateWorkout);

module.exports = router;