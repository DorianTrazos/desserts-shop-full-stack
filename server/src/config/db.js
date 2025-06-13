const mongoose = require('mongoose');
const MONGODB_URL =
  'mongodb+srv://dorianoriginaldesings:JoIgiX5SJeJrxNUg@mongo-trazos.5ahucgo.mongodb.net/exercises?retryWrites=true&w=majority&appName=mongo-trazos';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
