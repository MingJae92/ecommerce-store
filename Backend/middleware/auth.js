import jwt from "jsonwebtoken"

const secretKey = process.env.SECRET_KEY

const middlewareAuth =(res, req,next)=>{
    try {
        const token = req.headers.authorization.split("")[1];
        const decodeToken = jwt.verify(token, secretKey)
        req.userData={userId: decodeToken.userId, email:decodeToken.email}
    } catch ( error) {
        res.status(401).json({error:"Authentication failed. Try again!"})
    }
}

export default middlewareAuth

