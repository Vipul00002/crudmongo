import * as dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
async function connectDB() {
  mongoose
    .connect(String(process.env.MONGO_URI))
    .then(() => {
      console.log("database connected successfully");
    })
    .catch((err) => {
      console.log("Database connection Failed with Error:", err.message);
    });
}
export { connectDB };
