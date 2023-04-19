const mongoose = require('mongoose');

const alertSchema = new mongoose.Schema({
    cameraId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Camera',
        required: true
    },
    alertType: {
        type: String,
        required: true
    },
    alertTime: {
        type: Date,
        required: true
    },
    alertImage: {
        type: String,
        required: true
    },
    alertVideo: {
        type: String,
        required: true
    },
    alertDescription: {
        type: String,
        required: true
    },
    alertStatus: {
        type: String,
        required: true
    }
});

const Alert = mongoose.model('Alert', alertSchema);

module.exports = Alert;