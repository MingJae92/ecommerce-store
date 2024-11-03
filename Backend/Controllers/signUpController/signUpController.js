import bcrypt from "bcryptjs"
import signUp from "../../Models/signUpModel/signUpSchema.js";

const signUpController = async (req, res) => {
  try {
    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const userData = await signUp.create({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,  // Store the hashed password
      confirmpassword: hashedPassword, // Assuming you also want to store this hashed
    });

    console.log(JSON.stringify(userData));  // Logging before sending response
    res.status(200).json({ message: "User successfully added!", user: userData });
  } catch (error) {
    res.status(500).json({ message: "Internal server error!", error });
    console.log({error});
  }
};

export default { signUpController };
