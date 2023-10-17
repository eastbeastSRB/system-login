import mongoose from 'mongoose';
import config from 'config';

// import log from './logger';

async function dbConnect() {
  const dbUri = config.get<string>('dbUri');

  try {
    await mongoose.connect(dbUri);
    console.log('connection to DB successfully');
  } catch (error) {
    process.exit(1);
  }
}

export default dbConnect;
