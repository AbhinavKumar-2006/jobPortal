import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//function to connect to mongoDB 
const connectDB = async ()=>{
    mongoose.connection.on('connected' , ()=>console.log('database connected')); 
    await mongoose.connect(`${process.env.MONGODB_URI}/job-portal`);
}
export default connectDB;