import Matchs from '../database/models/MatchesModel';
import Teams from '../database/models/TeamsModel';

const findAllMatches = async () => {
  const allMatches = Matchs.findAll({
    include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ] });
  return allMatches;
};

const findAllInProgress = async () => {
  const allInProgress = await Matchs.findAll({ where: { inProgress: true },
    include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ] });
  return allInProgress;
};

const findAllNotInProgress = async () => {
  const allInProgress = await Matchs.findAll({ where: { inProgress: false },
    include: [
      { model: Teams, as: 'teamHome', attributes: ['teamName'] },
      { model: Teams, as: 'teamAway', attributes: ['teamName'] },
    ] });
  return allInProgress;
};

export default { findAllMatches, findAllInProgress, findAllNotInProgress };
