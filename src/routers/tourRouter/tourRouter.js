const express = require('express');
const {
  getTours,
  getTour,
  createTour,
  editTour,
  deleteTour,
} = require('../../controllers/tourController/tourController');

const tourRouter = express.Router();

tourRouter.get('/', getTours);
tourRouter.get('/:id', getTour);
tourRouter.post('/', createTour);
tourRouter.put('/:id', editTour);
tourRouter.delete('/:id', deleteTour);

module.exports = tourRouter;
