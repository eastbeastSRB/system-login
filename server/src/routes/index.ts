// basic imports
import express from 'express';
// import routes
import user from './user/user';
import auth from './auth/auth';

const router = express.Router();

// router use
router.use(user);
router.use(auth);

export default router;
