import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({path: "../.env"});

const connectDB = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to DB:", mongoose.connection.name);
    } catch (error){
        console.error("MongoDB connection error: ", error.message);
    }
};
export default connectDB;