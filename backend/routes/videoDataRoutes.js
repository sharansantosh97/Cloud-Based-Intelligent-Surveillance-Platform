const express = require('express');
const router = express.Router();
const videoDataController = require('../controllers/videoDataController');




router.get('/', videoDataController.getVideoDataByFilters);
// router.get('/filterByBuildingName/:buildingName', videoDataController.filterByBuildingName);
// router.get('/filterByCameraId/:cameraId', videoDataController.filterByCameraId);

// POST a new user
//router.post('/', userController.createUser);

module.exports = router;
