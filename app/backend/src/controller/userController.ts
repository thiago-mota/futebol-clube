import { Request, Response } from 'express';
import userService from '../service/userService';
// import Token from '../helpers/createToken';

const userLogin = async (request: Request, response: Response) => {
  const { email, password } = request.body;
  const xablau = await userService.validateUser(email, password);

  if (xablau) {
    return response
      .status(200)
      .json('Deu bom');
  }
};

export default userLogin;
