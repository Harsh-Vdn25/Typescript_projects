import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongo_url = process.env.MONGO_URL;

export const mongoConnect = async (): Promise<void> => {
  //To solve the type issue
  if (!mongo_url) {
    throw new Error("MONGO_URL is undefined");
  }
  try {
    await mongoose.connect(mongo_url);
    console.log("connected");
  } catch (err) {
    console.log("Failed to connect with the database");
    process.exit(1);
  }
};
