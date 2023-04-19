const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const videoDataRoutes = require('./routes/videoDataRoutes');
const buildingRoutes = require('./routes/buildingRoutes');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Parse incoming JSON
app.use(express.json());

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  next();
});


app.use('/videoData', videoDataRoutes);
app.use('/building', buildingRoutes);

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
