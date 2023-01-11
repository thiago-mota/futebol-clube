// import bcryptjs = require('bcryptjs');
import * as bcryptjs from 'bcryptjs';
import Users from '../database/models/UsersModel';

const validateUser = async (email: string, password: string) => {
  const findUser = await Users.findOne({ where: { email } });
  if (!findUser) {
    return { status: 400, message: 'Deu ruim' };
  }

  const checkPass = await bcryptjs.compare(password, findUser.password);
  if (!checkPass) return 'Deu pior';
};

export default { validateUser };
