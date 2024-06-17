const mongoose = require('mongoose');

const username = encodeURIComponent("mandyhsugo");
const password = encodeURIComponent("admin");
const uri = `mongodb+srv://${username}:${password}@cluster0.eqv9qji.mongodb.net/portfolio?retryWrites=true&w=majority`;

const connectDB = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB Atlas");
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
  }
};

module.exports = {
  connectDB,
  uri
};
