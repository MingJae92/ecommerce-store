import mongoose from "mongoose"

const loginSchema = new mongoose.Schema({
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }


})

const UserLogin = mongoose.model("UserLogin", loginSchema)

export default UserLogin