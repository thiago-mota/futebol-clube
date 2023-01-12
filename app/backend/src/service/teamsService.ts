import Teams from '../database/models/TeamsModel';

const findAllTeams = async () => {
  const allTeams = await Teams.findAll();
  return allTeams;
};

const getById = async (id: string) => {
  const result = await Teams.findByPk(id);
  return result;
};

export default { findAllTeams, getById };
