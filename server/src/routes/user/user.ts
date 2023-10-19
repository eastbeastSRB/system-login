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

// POST - Register new user
router.post('/users/v1', appContext(createUserSchema), createUserController);

// POST - Auth user
router.post('/users/v1/auth', loginUserController);

// POST - Logout user
router.post('/users/v1/logout', logoutUserController);

// GET - Get user profile
router.route('/users/v1/profile').get(protect, getLoggedUserController)


export default router;
