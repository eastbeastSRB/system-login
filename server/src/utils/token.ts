import jwt from 'jsonwebtoken';

const generateToken = (res: any, userId: number | string) => {
  const token = jwt.sign({ userId }, 'abc123', {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
};

export default generateToken;