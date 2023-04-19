const Alert = require('../models/alert');
const Camera = require('../models/camera');

const getCameras = async (req, res, next) => {
    try {
        const cameras = await Camera.find();
        for(let camera of cameras) {
            camera.alerts = await Alert.find({cameraId: camera._id});
          }
        res.status(200).json({ cameras });
    } catch (error) {
        next(error);
    }
};

const getCamerasByFilters = async (req, res, next) => {
    try {
        let query = {};
        if (req.query.buildingName) {
            query.buildingId = req.query.buildingName;
        }
        if (req.query.cameraId) {
            query.cameraId = Number(req.query.cameraId);
        }
        const cameras = await Camera.find(query);
        res.status(200).json({ cameras });
    } catch (error) {
        next(error);
    }
}

const createCamera = async (req, res, next) => {
    const camera = new Camera(req.body);
    try {
        const newCamera = await camera.save();
        res.status(201).json(newCamera);
    } catch (error) {
        next(error);
    }
};

const updateCamera = async (req, res, next) => {
    try {
        const camera = await Camera.findOne({ cameraId: req.params.cameraId });
        if (camera) {
            camera.cameraName = req.body.cameraName;
            camera.buildingId = req.body.buildingId;
            camera.cameraType = req.body.cameraType;
            camera.resolution = req.body.resolution;
            camera.location = req.body.location;
            camera.status = req.body.status;
            const updatedCamera = await camera.save();
            res.status(200).json(updatedCamera);
        } else {
            res.status(404).json({ message: 'Camera not found' });
        }
    } catch (error) {
        next(error);
    }   
};

const deleteCamera = async (req, res, next) => {
    try {
        const camera = await Camera.findOne({ cameraId: req.params.cameraId });
        if (camera) {
            await camera.remove();
            res.status(200).json({ message: 'Camera deleted' });
        } else {
            res.status(404).json({ message: 'Camera not found' });
        }
    } catch (error) {
        next(error);
    }
};

module.exports = { getCameras, getCamerasByFilters, createCamera, updateCamera, deleteCamera };

