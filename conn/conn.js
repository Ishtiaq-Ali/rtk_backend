const mongoose = require("mongoose");

const conn = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://user:pakistan12345@cluster0.bysaq.mongodb.net/mernrtk"
    );
    console.log("MongoDB connected successfully...");
  } catch (error) {
    console.log("server error", error);
  }
};

module.exports = conn; 
