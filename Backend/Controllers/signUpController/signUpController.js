import signUp from "./Models/signUpModel/signUpSchema.js";

const signUpController = async (req, res) => {
  try {
    const userData = await signUp.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.pass,
      confirmpassword: req.body.confirmpassword,
    });
    
    console.log(JSON.stringify(userData));  // Logging before sending response
    res.status(200).json({ message: "User successfully added!", user: userData });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!", error });
  }
};

export default { signUpController };