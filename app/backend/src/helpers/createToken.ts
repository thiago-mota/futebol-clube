import * as JWT from 'jsonwebtoken';
// import { IUser } from '../interfaces/index';

require('dotenv/config');

const { JWT_SECRET } = process.env || 'jwt_secret';

const createToken = (email: string) => {
  const token = JWT.sign(email, JWT_SECRET as string);
  return token;
};

const decodeToken = (token: string) => {
  const verifiedToken = JWT.verify(token, JWT_SECRET as string);
  return verifiedToken;
};

export default { createToken, decodeToken };
