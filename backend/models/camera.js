const mongoose = require('mongoose');
const Building = require('./building');
const cameraSchema = new mongoose.Schema({
  cameraId: {
    type: Number,
    required: true,
    unique: true
  },
  buildingId: {
    type: Number,
    ref: 'Building',
    required: true
  },
  cameraType: {
    type: String,
    required: true
  },
  resolution: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

cameraSchema.pre('save', async function(next) {
  const camera = this;
  const lastCamera = await Camera.findOne().sort({ cameraId: -1 });
  if (lastCamera) {
    camera.cameraId = lastCamera.cameraId + 1;
  } else {
    camera.cameraId = 1;
  }
  next();
});

const Camera = mongoose.model('Camera', cameraSchema);

module.exports = Camera;
