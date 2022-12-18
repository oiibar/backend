const express = require('express');
const {
	getAllBreeds,
	getOneBreedInfo,
} = require('../controllers/breedsController.js');

const router = express.Router();

router.get('/', getAllBreeds);
router.get('/:id', getOneBreedInfo);

// router.post('/', createWorkout);
// router.delete('/:id', deleteWorkout);
// router.patch('/:id', updateWorkout);

module.exports = router;