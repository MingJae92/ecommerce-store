import express from "express";
import connectDB from "../Database/connection.js";
import dotenv from "dotenv";

// Correct syntax for dotenv.config with path option
dotenv.config({ path: "./Config/.env" });

const app = express();
const PORT = 9000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

connectDB();
