import * as bcryptjs from 'bcryptjs';
import createTkn from '../helpers/createToken';
import Users from '../database/models/UsersModel';

const userLogin = async (email: string, password: string) => {
  const findUser = await Users.findOne({ where: { email } });
  if (!findUser) {
    return { status: 401, message: 'Incorrect email or password' };
  }

  const checkPass = await bcryptjs.compare(password, findUser.password);
  if (!checkPass) return { status: 401, message: 'Incorrect email or password' };

  const createUserToken = createTkn.createToken(email);
  return { status: 200, message: createUserToken };
};

const findUserRole = async (email: string) => {
  const findUser = await Users.findOne({ where: { email } });
  return { role: findUser?.role };
};

export default { userLogin, findUserRole };
