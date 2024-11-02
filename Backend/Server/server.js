import express from "express";
import connectDB from "../Database/connection.js";
// import signUp from "../Models/signUpModel/signUpSchema.js";
import dotenv from "dotenv";
// import axios from "axios";
import signUpRoute from "../Routes/signUpRoute/signUpRoute.js";

// Load environment variables from a .env file
dotenv.config({ path: "./config/.env" });

const PORT = process.env.VITE_SERVER_PORT;
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Use the signup route for API calls to "/signup"
app.use("/signup", signUpRoute);

// app.post("/signup", async (req, res) => {
//   try {
//     const {name, email, password, confirmpassword}=req.body
//     // const newUser = await signUp.create({
//     //   name: req.body.name,
//     //   email: req.body.email,
//     //   password: req.body.password,
//     //   confirmpassword: req.body.confirmpassword,
//     // });
//     const newUser = await signUp.create({name, email, password, confirmpassword})
//     console.log(JSON.stringify(newUser));
//     res
//       .status(200)
//       .json({ messages: "User successfully added!", user: newUser });
     
//   } catch (error) {
//     res.status(500).json({ message: "Internal server error!", error });
//   }
// });

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

// Connect to the database
connectDB();
