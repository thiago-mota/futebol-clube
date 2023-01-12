import Teams from '../database/models/TeamsModel';

const findAllTeams = async () => {
  const allTeams = await Teams.findAll();
  return allTeams;
};

export default { findAllTeams };
