import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async()=>{
     try {
          // Connect to MongoDB using MONGO_URI from .env
          const conn = await mongoose.connect(process.env.MONGO_URI!);
      
          // Log a success message if connection is successful
          console.log(`MongoDB Connected: ${conn.connection.host}`);
        } catch (error) {
          // Log the error message and exit the process
          console.error(`Error: ${(error as Error).message}`);
          process.exit(1);
        }
}

export default connectDB;


