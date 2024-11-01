import signUp from "./Models/signUpModel/signUp";

const signUpController = async (req, res) => {
  try {
    
    const userData = await signUp.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.pass,
      confirmpassword: req.body.confirmpassword,
    });
    res.status(200).json({message:"User successfully added!", user:newUser})
    console.log(JSON.stringify(userData));
  } catch (error) {
    res.status(500).json({message:"Internal server error!", error})
  }
};

export default { signUpController };
