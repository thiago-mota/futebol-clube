import * as JWT from 'jsonwebtoken';
import { IUser } from '../interfaces/index';

require('dotenv/config');

const { JWT_SECRET } = process.env || 'jwt_secret';

const createToken = (user: IUser) => {
  const data = { id: user.id, username: user.username };
  const token = JWT.sign(data, JWT_SECRET as string);
  return token;
};

const decodeToken = (token: string) => {
  const verifiedToken = JWT.verify(token, JWT_SECRET as string);
  return verifiedToken;
};

export default { createToken, decodeToken };
