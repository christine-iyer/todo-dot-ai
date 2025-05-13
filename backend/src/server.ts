import dotenv from 'dotenv';
import app from './app';
import connectDB from './config/db';

// Load environment variables
dotenv.config();

// Server Configuration
const PORT = process.env.PORT || 5000;

// Connect to MongoDB and Start the Server
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}).catch((error) => {
  console.error('Database connection failed:', error);
});