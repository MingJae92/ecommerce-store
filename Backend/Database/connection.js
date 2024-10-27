import mongoose from "mongoose";
const dbURI ="mongodb+srv://mingchiwong:IeRXOoOmVo8BsJN8@cluster0.oagw5.mongodb.net/";

const connectDB = async () => {
    try {
      console.log("Attempting to connect to MongoDB...");
      await mongoose.connect(dbURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log("Connected to MongoDB successfully!");
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  export default connectDB