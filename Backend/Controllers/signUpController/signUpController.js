import bcrypt from "bcryptjs";
import signUp from "../../Models/signUpModel/signUpSchema.js";

const signUpController = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const userData = await signUp.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
      confirmpassword: hashedPassword,
    });

    const existingUser = await signUp.findOne({ name: req.body.name });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Name already exists! Please use another name!" });
        
    }

    console.log(JSON.stringify(userData)); // Logging before sending response
    console.log("User successfully added!")
    res
      .status(200)
      .json({ message: "User successfully added!", user: userData });
      
  } catch (error) {
    res.status(500).json({ message: "Internal server error!", error });
    console.log({ error });
  }
};

export default { signUpController };
