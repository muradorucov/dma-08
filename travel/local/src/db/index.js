const { db_url } = require("../config")
const mongoose = require("mongoose")

const dbConnection = async () => {
  try {
    await mongoose.connect(db_url);
    console.log("db connect successfully");

  } catch (error) {
    console.log("db connection error", error);
  }
}

module.exports = dbConnection;