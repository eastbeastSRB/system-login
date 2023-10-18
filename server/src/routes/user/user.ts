import express from 'express';
import appContext from '../../middleware/appContext';
import {
  createUserController,
  loginUserController,
  logoutUserController,
  getLoggedUserController } from '../../controller/user.controller';
import { createUserSchema } from '../../schema/user.schema';
import protect from '../../middleware/auth';

const router = express.Router();

router.post('/users/v1', appContext(createUserSchema), createUserController);

router.post('/users/v1/auth', loginUserController);

router.post('/users/v1/logout', logoutUserController);

router.route('/users/v1/profile').get(protect, getLoggedUserController)


router.get("/users/v1", (req: any, res: any) => {
  console.log('enter in get users')
  res.send("hello user !!!!");
});

export default router;
