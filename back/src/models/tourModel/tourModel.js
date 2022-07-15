const mongoose = require('mongoose');

const { Schema } = mongoose;

const tourSchema = new Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    count: {
      type: Number,
      // required: true,
      // min: 1,
      // max: 10,
    },
  },
  { versionKey: false }
);

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
