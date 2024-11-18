import express from "express"
import loginController from "../../Controllers/loginController/loginController.js"

const router = express.Router()

router.post("/", loginController)

export default router
