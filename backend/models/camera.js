const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
  cameraId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  buildingId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Building',
  },
  cameraType: {
    type: String
  },
  resolution: {
    type: String
  },
  location: {
    type: [Number],
    required: true
  },
  operationStatus: {
    type: String,
    required: true
  },
  healthStatus: {
    type: String,
    required: true
  }
});

const Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera;
