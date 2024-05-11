import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connection = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || "your db url instead of DENTAL write anything"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};

export default connection;
