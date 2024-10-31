import mongoose from "mongoose"

const signUp = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    confirmpassword:{
        type:String
    }

})

const userSignUp = mongoose.model("Usersignup", signUp)

export default(userSignUp)