const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URL
    );
    console.log("MongoDB connected successfully...");
  } catch (error) {
    console.log("server error", error);
  }
};

module.exports = conn; 
