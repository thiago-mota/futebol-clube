import Matchs from '../database/models/MatchesModel';

const findAllMatches = async () => {
  const allMatches = Matchs.findAll();
  return allMatches;
};

export default { findAllMatches };
