import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "../Server/config/.env" });

const dbURI =process.env.VITE_MONGO_DB_URI

const connectDB = async () => {
    try {
      console.log("Attempting to connect to MongoDB...");
      await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB successfully!");
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  export default connectDB