import jwt from 'jsonwebtoken';

const generateToken = (res: any, userId: number | string): string => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET ?? 'abc123', {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });

  return token;
};

export default generateToken;