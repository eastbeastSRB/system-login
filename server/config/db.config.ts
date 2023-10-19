import mongoose from 'mongoose';

async function dbConnect() {
  const defaultUri: string = 'mongodb://localhost:27017/login-system'
  const mongoUri = process.env.MONGO_URI || defaultUri

  try {
    await mongoose.connect(mongoUri);
    console.log('connection to DB successfully');
  } catch (error) {
    process.exit(1);
  }
}

export default dbConnect;
