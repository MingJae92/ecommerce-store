import express from "express";
import connectDB from "../Database/connection.js";
import dotenv from "dotenv";

// Correct syntax for dotenv.config with path option
dotenv.config({ path: "./config/.env" });

const PORT= process.env.VITE_SERVER_PORT
const app = express();


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

connectDB();
