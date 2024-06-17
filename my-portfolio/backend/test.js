const mongoose = require('mongoose');

const username = encodeURIComponent("mandyhsugo");
const password = encodeURIComponent("admin");

// Replace <password> with your MongoDB Atlas password
const uri = `mongodb+srv://${username}:${password}@cluster0.eqv9qji.mongodb.net/portfolio?retryWrites=true&w=majority`;

// Define the schema
const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
});

// Define the model
const Test = mongoose.model('Test', testSchema, 'testCollection');

// Connect to the database and insert a test document
const testDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB Atlas");

    // Create a new test document
    const testDocument = new Test({
      name: 'Test Name',
      value: 'Test Value'
    });

    // Save the document to the database
    await testDocument.save();
    console.log("Test document inserted into the database");

    // Close the connection
    await mongoose.connection.close();
    console.log("Connection closed");
  } catch (err) {
    console.error(err);
  }
};

testDB();
