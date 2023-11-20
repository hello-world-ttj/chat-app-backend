const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Mongoose Connected successfully..!`.blue.bold);
  } catch (error) {
    console.log(`Error : ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
