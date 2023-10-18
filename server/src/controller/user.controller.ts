import { Request, Response } from 'express';
import { UserSchema } from '../schema/user.schema';
import { createUser } from '../services/user.services';
import User from '../model/user.model';
import generateToken from '../utils/token';
import { IUser } from '../schema/user.schema';

// Create a new user
// POST /users/v1
export async function createUserController(
  req: Request<{}, {}, UserSchema>,
  res: Response,
) {
  const body = req.body;

  try {
    const userExist: any = await User.findOne({ email: body.email });

    if(userExist) {
      return res.status(400).json({ error: 'User with this email already exist' });
    }
    const user = await createUser(body);

    if(user){
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
      })
      // return res.send('user created')
    };

  } catch (error: any) {
    // 11000 unique constrain has been violated
    if (error.code === 11000) {
      return res.status(409).send('Account already exist');
    }
    return res.status(500).send(error);
  }
}

// Login user
// POST /users/v1/auth
export async function loginUserController(
  req: Request<{}, {}, UserSchema>,
  res: Response,
) {
  const {email, password} = req.body;
  const user: any = await User.findOne({ email: email });

  console.log('LOGIN CONTROLER')

  if(user && await user.validatePassword(password)){
    const token = generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: token,
    })
  } else {
    // res.status(401);
    return res.status(401).json({ error: 'Password or email are invalid' });
  }
}

// Logout user
// POST /users/v1/logout
export async function logoutUserController(
  req: Request<{}, {}, UserSchema>,
  res: Response,
) {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: 'Logged out successfully' });
}

// Get user
// GET /users/v1/profile
export async function getLoggedUserController(
  req: Request<{}, {}, IUser>,
  res: Response,
) {
  console.log('User logged successfully.....  ')
  const user = {
    _id: req.body._id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email
  }
  res.status(200).json({message: 'congrats'})
  // const user = await User.findById(req.user._id);

  // if (user) {
  //   res.json({
  //     _id: user._id,
  //     firstName: user.firstName,
  //     lastName: user.lastName,
  //     email: user.email,
  //   });
  // } else {
  //   res.status(404);
  //   throw new Error('User not found');
  // }
}