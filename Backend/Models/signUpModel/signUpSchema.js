import mongoose from "mongoose";

const signUpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword:{
        type:String,
        required:true
    }
});

const UserSignUp = mongoose.model("UserSignUp", signUpSchema);

export default UserSignUp;
