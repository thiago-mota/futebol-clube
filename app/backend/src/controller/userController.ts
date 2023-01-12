import { Request, Response } from 'express';
import decodeTkn from '../helpers/createToken';
import userService from '../service/userService';

const userLogin = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  if (!email || !password) {
    return response
      .status(400)
      .json({ message: 'All fields must be filled' });
  }

  const result = await userService.userLogin(email, password);

  if (result.status === 200) {
    return response
      .status(200)
      .json({ token: result.message });
  }
  return response
    .status(401)
    .json({ message: result.message });
};

const getUserRole = async (request: Request, response: Response) => {
  const { authorization: token } = request.headers;

  if (!token) {
    return response
      .status(401)
      .json({ message: 'Token not found' });
  }

  const userMail = decodeTkn.decodeToken(token);
  const userRole = await userService.findUserRole(userMail as string);

  return response
    .status(200)
    .json(userRole);
};

export { userLogin, getUserRole };
