import signUp from "../../Models/signUpModel/signUpSchema.js";
import bycrpt from "bcrypt"
import dotenv from "dotenv"
dotenv.config({ path: "../Server/config/.env" });
import jwt from "jsonwebtoken"

const secretKey= process.env.SECRET_KEY

const loginController =async (res, req) => {
    try {
        const {email, password}=req.body
        const user = signUp.findOne({email:email})
            if (!user){
                return res.status(401).json({message:"Authentication fail, try again!"})
            }
           const passwordMatch = await bycrpt.compare(password, user.password)

           if(!passwordMatch){
            return res.status(401).json({error:"Authentication failed, try again!"})
           }

           const token = jwt.sign({userId:user_id, email:email.id}, secretKey,{
            expiresIn:"1h",
           });
           res.status(200).json({token, userId:user_id})

        
    } catch (error) {
        res.status(500).json({error:"Authentication fail, try again!"})
    }
}

export default loginController