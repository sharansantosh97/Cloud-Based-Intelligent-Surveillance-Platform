const mongoose = require('mongoose');

const campusSchema = new mongoose.Schema({
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
  buildings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Building'
  }]
});

campusSchema.pre('save', async function(next) {
  const campus = this;
  const lastCampus = await Campus.findOne().sort({ campusId: -1 });
  if (lastCampus) {
    campus.campusId = lastCampus.campusId + 1;
  } else {
    campus.campusId = 1;
  }
  next();
});

const Campus = mongoose.model('Campus', campusSchema);

module.exports = Campus;
