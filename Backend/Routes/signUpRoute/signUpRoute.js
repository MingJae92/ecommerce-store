import express from "express";
import SignupControllerInfo from "./signUpRoute/signUpController.js";

const router = express.Router();

router.post("/signup", SignupControllerInfo.signUpController);

export default signUpRoute;
