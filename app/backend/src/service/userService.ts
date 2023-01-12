import * as bcryptjs from 'bcryptjs';
import token from '../helpers/createToken';
import Users from '../database/models/UsersModel';

const userLogin = async (email: string, password: string) => {
  const findUser = await Users.findOne({ where: { email } });
  if (!findUser) {
    return { status: 401, message: 'Incorrect email or password' };
  }

  const checkPass = await bcryptjs.compare(password, findUser.password);
  if (!checkPass) return { status: 401, message: 'Incorrect email or password' };

  const createUserToken = token.createToken(email);
  return { status: 200, message: createUserToken };
};

export default { userLogin };
