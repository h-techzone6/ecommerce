// db.js
const mongoose = require('mongoose');

const mongoURI = 'mongodb://localhost:27017/ecommerce'; 
// Connect to MongoDB using Mongoose
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log('MongoDB connected successfully!');
//   })
//   .catch((err) => {
//     console.error('MongoDB connection error:', err);
//   });
// Connect to MongoDB using Mongoose
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useUnifiedTopology: true     
    });
    console.log('MongoDB connected successfully!');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit the process with a failure status
  }
};

connectDB()

// Export the mongoose connection
module.exports = mongoose;
