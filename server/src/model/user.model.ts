import mongoose, { Document, Schema, Model, model } from 'mongoose';
import { hashPassword } from '../utils/auth';
import { compareSync } from 'bcryptjs';
// import bcrypt from 'bcrypt';

// Define the user schema
export interface IUserDocument extends Document {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  validatePassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<IUserDocument>({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    // match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true });

// Hash the password before saving
userSchema.pre<IUserDocument>('save', async function (next) {
  const user = this as IUserDocument;
  if (!user.isModified('password')) return next();

  try {
    // const userPassword = generateNewPassword()
    const userPassword = user.password
    user.password = hashPassword(userPassword);

    return next();
  } catch (err: any) {
    return next(err);
  }
});

// Add a method to validate the password
userSchema.methods.validatePassword = async function (password: string): Promise<boolean> {
  return await compareSync(password, this.password);
};

// Create and export the User model
const User: Model<IUserDocument> = model('User', userSchema);

export default User