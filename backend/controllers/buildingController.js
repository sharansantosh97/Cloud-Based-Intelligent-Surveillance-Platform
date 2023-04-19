const Building = require('../models/building');

const getNames = async (req, res, next) => {
  try {
    const buildings = await Building.find({}, 'buildingName');
    const buildingNames = buildings.map(building => building.buildingName);
    res.json({ buildingNames });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = { getNames };

// // Get all users
// const getUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.status(200).json(users);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// // Create a new user
// const createUser = async (req, res) => {
//   const user = new User(req.body);
//   try {
//     const newUser = await user.save();
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };


// const getFullData = async (req, res) => {
//   try {
//     const data = await VideoData.find();
//     res.status(200).json({data});
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ message: err.message });
//   }
// };

// const sample = async (req, res) => {
//   try {
//     // const VideoData = await VideoData.find();
//     res.status(200).json({"as":"Asas"});
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };



