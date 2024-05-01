import mongoose from "mongoose";

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/CRUD");
    console.log("Connect To MongoDB");
  } catch (error) {
    console.log("Error connecting to MongoDB");
  }
};
