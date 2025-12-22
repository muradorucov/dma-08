const express = require('express');
const { getAllTours, getAllToursForAdmin, createTour, updateTour, changeTourStatus, deleteTour, getSingleTour, getSingleTourForAdmin } = require('../../controllers/tours.controller');
const authenticate = require('../../middleware/authenticate');
const upload = require('../../utils/multer');
const tourRouter = express.Router();

const files = [
  {
    name: 'image',
    maxCount: 10
  }
]


tourRouter.get("/", getAllTours);
tourRouter.get("/for-admin", authenticate, getAllToursForAdmin);
tourRouter.get("/:id", getSingleTour);
tourRouter.get("/:id/for-admin", authenticate, getSingleTourForAdmin);

tourRouter.post("/", authenticate, upload.fields(files), createTour);
tourRouter.put("/:id", authenticate, upload.fields(files), updateTour);
tourRouter.patch("/:id", authenticate, changeTourStatus);
tourRouter.delete("/:id", authenticate, deleteTour);


module.exports = tourRouter;