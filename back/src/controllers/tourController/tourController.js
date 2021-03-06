const Tour = require('../../models/tourModel/tourModel');

exports.getTours = async (req, res) => {
  // try {
  const tours = await Tour.find({});
  res.status(200).json({
    status: 'success',
    count: tours.length,
    data: { tours: tours },
  });
  // } catch (err) {
  //   res.status(404).json({
  //     status: 'Fail',
  //     message: err,
  //   });
  // }
};

exports.getTour = async (req, res) => {
  try {
    const { id } = req.params;
    const tour = await Tour.findOne({ _id: id });
    res.status(200).json({
      status: 'success',
      data: { tour },
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      message: 'Not found',
    });
  }
};

exports.createTour = async (req, res) => {
  try {
    console.log(req.body);
    const newTour = await Tour.create(req.body);

    res.status(201).json({ status: 'success', data: { tour: newTour } });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.editTour = async (req, res) => {
  try {
    const { id } = req.params;

    const tour = await Tour.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      status: 'success',
      data: { tour: tour },
    });
  } catch (err) {
    res.status(400).json({
      status: 'Fail',
      message: err,
    });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const { id } = req.params;
    await Tour.findByIdAndDelete(id);
    res.status(204).json({
      status: 'success',
      data: null,
    });
  } catch (err) {
    res.status(404).json({
      status: 'Fail',
      message: err,
    });
  }
};
