const tourModel = require("../model/tour.model");

const getAllTours = async (req, res) => {
  try {

    const tours = await tourModel.find({
      isActive: true,
      isDelete: false
    })


    res.status(200).json({
      ok: true,
      message: 'Get all tours',
      data: tours
    });
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Server Error'
    });
  }
};


const getAllToursForAdmin = async (req, res) => {
  try {
    const tours = await tourModel.find({
      isDelete: false
    });

    res.status(200).json({
      ok: true,
      message: 'Get all tours for admin',
      data: tours
    });
  }
  catch (error) {

    res.status(500).json({
      ok: false,
      message: 'Server Error'
    });
  }
}

const getSingleTour = async (req, res) => {

  try {
    const id = req.params.id;
    // const tour = await tourModel.findById(id);
    const tour = await tourModel.findOne({
      _id: id,
      isDelete: false,
      isActive: true
    });

    if (!tour) {
      return res.status(404).json({
        ok: false,
        message: 'Tour not found'
      });
    }

    res.status(200).json({
      ok: true,
      data: tour,
      message: 'Get single tour'
    });
  }
  catch (error) {

    res.status(500).json({
      ok: false,
      message: 'Server Error'
    });
  }
};

const getSingleTourForAdmin = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await tourModel.findOne({
      _id: id,
      isDelete: false
    });

    if (!tour) {
      return res.status(404).json({
        ok: false,
        message: 'Tour not found'
      });
    }

    res.status(200).json({
      ok: true,
      data: tour,
      message: 'Get single tour'
    });
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Server Error'
    });
  }
}

const createTour = async (req, res) => {
  try {

    const {
      title,
      location,
      expiredDate
    } = req.body;



    let imageFiles = req.files?.image?.map(file => {
      return file.filename
    });

    const newTour = await tourModel.create({
      title,
      location,
      expiredDate,
      image: imageFiles
    });



    res.status(201).json({
      ok: true,
      message: 'Tour created successfully',
      data: newTour
    });

    // const image = req.file
    // Logic to create a new tour in the database
  }
  catch (error) {
    console.log(error);

    res.status(500).json({
      ok: false,
      message: 'Server Error'
    });
  }
};


const updateTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await tourModel.findById(id);

    if (!tour || tour.isDelete) {
      return res.status(404).json({
        ok: false,
        message: 'Tour not found'
      });
    }

    const {
      title,
      location,
      expiredDate
    } = req.body;

    let imageFiles = req.files?.image?.map(file => {
      return file.filename
    });

    tour.image = imageFiles && imageFiles.length > 0 ? imageFiles : tour.image;
    tour.title = title || tour.title;
    tour.location = location || tour.location;
    tour.expiredDate = expiredDate || tour.expiredDate;

    const updatedTour = await tour.save();

    res.status(200).json({
      ok: true,
      message: 'Tour updated successfully',
      data: updatedTour
    });
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Server Error'
    });
  }
};


const changeTourStatus = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await tourModel.findById(id);

    if (!tour || tour.isDelete) {
      return res.status(404).json({
        ok: false,
        message: 'Tour not found'
      });
    }
    tour.isActive = !tour.isActive;
    await tour.save();

    res.status(200).json({
      ok: true,
      message: 'Tour status changed successfully',
    });

  }
  catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Server Error'
    });
  }
};


const deleteTour = async (req, res) => {
  try {
    const id = req.params.id;
    const tour = await tourModel.findById(id);
    if (!tour || tour.isDelete) {
      return res.status(404).json({
        ok: false,
        message: 'Tour not found'
      });
    }
    tour.isDelete = true;
    await tour.save();
    res.status(200).json({
      ok: true,
      message: 'Tour deleted successfully',
    });
  }
  catch (error) {
    res.status(500).json({
      ok: false,
      message: 'Server Error'
    });
  }
}

module.exports = {
  getAllTours,
  getAllToursForAdmin,
  createTour,
  updateTour,
  deleteTour,
  changeTourStatus,
  getSingleTour,
  getSingleTourForAdmin
};