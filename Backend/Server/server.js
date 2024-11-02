import express from "express";
import connectDB from "../Database/connection.js";
// import signUp from "../Models/signUpModel/signUpSchema.js";
import dotenv from "dotenv";
// import axios from "axios";
import signUpRoute from "../Routes/signUpRoute/signUpRoute.js";
import cors from "cors"

// Load environment variables from a .env file
dotenv.config({ path: "./config/.env" });

const PORT = process.env.VITE_SERVER_PORT;
const app = express();

// Middleware to parse JSON requests
app.use(cors())
app.use(express.json());

// Use the signup route for API calls to "/signup"
app.use("/signup", signUpRoute);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Connect to the database
connectDB();
