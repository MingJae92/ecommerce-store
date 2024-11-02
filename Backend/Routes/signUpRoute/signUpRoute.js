import express from "express";
import SignupControllerInfo from "../../Controllers/signUpController/signUpController.js";

const router = express.Router();

router.post("/", SignupControllerInfo.signUpController);

export default router
