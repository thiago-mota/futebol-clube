import { NextFunction, Request, Response } from 'express';
import decodeTkn from '../helpers/createToken';

const verifyToken = async (request: Request, response: Response, next: NextFunction) => {
  const { authorization: token } = request.headers;

  if (!token) {
    return response
      .status(401)
      .json({ message: 'Token not found' });
  }
  try {
    decodeTkn.decodeToken(token);
  } catch (error) {
    return response
      .status(401)
      .json({ message: 'Token must be a valid token' });
  }

  next();
};

export default verifyToken;
