import { Request, Response } from 'express';
import { UserSchema } from '../schema/user.schema';
// import { createUser } from '../services/user.service';

export async function createUserController(
  req: Request<{}, {}, UserSchema>,
  res: Response,
) {
  const body = req.body;

  console.log('in controller---');

  try {
    // const user = await createUser(body);

    return res.send('user created');
  } catch (error: any) {
    // 11000 unique constrain has been violated
    if (error.code === 11000) {
      return res.status(409).send('Account already exist');
    }

    return res.status(500).send(error);
  }
}
