import * as bcryptjs from 'bcryptjs';
import token from '../helpers/createToken';
import Users from '../database/models/UsersModel';

const userLogin = async (email: string, password: string) => {
  const findUser = await Users.findOne({ where: { email } });
  if (!findUser) {
    return { status: 401, message: 'Incorrect email or password' };
  }

  const checkPass = await bcryptjs.compare(password, findUser.password);
  if (!checkPass) return { status: 401, message: 'CHECKPASS ---> Incorrect email or password' };

  const userToken = token.createToken(email);
  return userToken;

  return 'deu bom';
};

export default { userLogin };
