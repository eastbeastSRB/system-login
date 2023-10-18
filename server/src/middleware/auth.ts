import jwt from 'jsonwebtoken';
import User from '../model/user.model';

interface JwtPayload {
    userId: string;
  }

const protect = (async (req:any, res:any, next:any) => {
  let token;

  token = req.cookies.jwt;

  console.log(token, 'TOKEN IN COOKIE')
  console.log(req);

  if (token) {
    try {
      const decoded: JwtPayload = jwt.verify(token, 'abc123') as JwtPayload;

      req.user = await User.findById(decoded.userId).select('-password');

      console.log('AUTH HELPER', req.user)

      next();
    } catch (error) {
      console.error(error);
      res.status(401);
      throw new Error('Not authorized, token failed');
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token');
  }
});

export default protect;