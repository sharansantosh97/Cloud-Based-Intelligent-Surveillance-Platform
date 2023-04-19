const express = require('express');
const router = express.Router();
const buildingController = require('../controllers/buildingController');




router.get('/getList', buildingController.getNames);
// router.get('/filterByBuildingName/:buildingName', videoDataController.filterByBuildingName);
// router.get('/filterByCameraId/:cameraId', videoDataController.filterByCameraId);

// POST a new user
//router.post('/', userController.createUser);

module.exports = router;
