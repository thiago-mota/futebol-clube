import Matchs from '../database/models/MatchesModel';

const findAllMatches = async () => {
  const allMatches = Matchs.findAll();
  return allMatches;
};

const findAllInProgress = async () => {
  const allInProgress = await Matchs.findAll({ where: { inProgress: true } });
  return allInProgress;
};

const findAllNotInProgress = async () => {
  const allInProgress = await Matchs.findAll({ where: { inProgress: false } });
  return allInProgress;
};

export default { findAllMatches, findAllInProgress, findAllNotInProgress };
