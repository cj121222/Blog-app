import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Connecting to:", process.env.MONGO_URI); 
  try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Successfully connected to mongoDB👍")
  } catch (error) {
    console.log(`ERROR: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
