const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

// Explicitly specify the collection name as 'images'
const Image = mongoose.model('Image', imageSchema, 'images');

module.exports = Image;
