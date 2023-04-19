const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipCode: {
    type: String,
    required: true
  },
  campusId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Campus',
    required: true
  },
  cameras: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Camera'
  }]
});

buildingSchema.pre('save', async function(next) {
  const building = this;
  const lastBuilding = await Building.findOne().sort({ buildingId: -1 });
  if (lastBuilding) {
    building.buildingId = lastBuilding.buildingId + 1;
  } else {
    building.buildingId = 1;
  }
  next();
});

const Building = mongoose.model('Building', buildingSchema);

module.exports = Building;
