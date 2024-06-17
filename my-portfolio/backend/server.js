const express = require('express');
const cors = require('cors');
const path = require('path');
const imageRoutes = require('./routes/imageRoutes');
const emailRoutes = require('./routes/emailRoutes');
const resumeRouter = require('./routes/resumeRoutes');

const { connectDB } = require('./config/db');
require('dotenv').config(); // Load environment variables

// Initialize Express app
const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use routes
app.use('/api/images', imageRoutes);
app.use('/api/email', emailRoutes);
app.use('/api/resume', resumeRouter);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
