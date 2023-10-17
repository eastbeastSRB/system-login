import { Request, Response } from 'express';
import { UserSchema } from '../schema/user.schema';
import { createUser } from '../services/user.services';
import UserModel from '../model/user.model';

export async function createUserController(
  req: Request<{}, {}, UserSchema>,
  res: Response,
) {
  const body = req.body;

  console.log('in controller---');

  try {
    const userExist: any = await UserModel.findOne({ email: body.email });

    if(userExist) {
      console.log(userExist);
      return res.status(400).json({ error: 'User with this email already exist' });
    }

    const user = await createUser(body);

    return res.send('user created');
  } catch (error: any) {
    // 11000 unique constrain has been violated
    if (error.code === 11000) {
      return res.status(409).send('Account already exist');
    }

    return res.status(500).send(error);
  }
}
