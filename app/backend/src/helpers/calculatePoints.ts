import Matchs from '../database/models/MatchesModel';
import matchesService from '../service/matchesService';
import teamsService from '../service/teamsService';

const homeTeamGames = async () => {
  const finishedGAmes = await matchesService.findAllNotInProgress();
  const allTeams = await teamsService.findAllTeams();

  const homeGames = allTeams.map((team) => {
    const name = team.teamName;
    const games = finishedGAmes.filter((game) => game.homeTeam === team.id);

    return ({ name, games });
  });

  return homeGames;
};

const homeTeamsTotalPoints = (games: Array<Matchs>): number => {
  let homeTeamPoints = 0;

  games.forEach((game) => {
    if (game.homeTeamGoals > game.awayTeamsGoals) homeTeamPoints += 3;
    if (game.homeTeamGoals < game.awayTeamsGoals) homeTeamPoints += 0;
    if (game.homeTeamGoals === game.awayTeamsGoals) homeTeamPoints += 1;
  });

  return homeTeamPoints;
};

const homeTeamsTotalGames = (games: Array<Matchs>): number => {
  const totalGames = games.length;

  return totalGames;
};

const homeTeamsVictories = (games: Array<Matchs>): number => {
  let totalVictories = 0;

  games.forEach((game) => {
    if (game.homeTeamGoals > game.awayTeamsGoals) totalVictories += 1;
  });

  return totalVictories;
};

const homeTeamsDraws = (games: Array<Matchs>): number => {
  let totalDraws = 0;

  games.forEach((game) => {
    if (game.homeTeamGoals === game.awayTeamsGoals) totalDraws += 1;
  });

  return totalDraws;
};

const homeTeamsLosses = (games: Array<Matchs>): number => {
  let totalLosses = 0;

  games.forEach((game) => {
    if (game.homeTeamGoals < game.awayTeamsGoals) totalLosses += 1;
  });

  return totalLosses;
};

const homeTeamsGoalsFavor = (games: Array<Matchs>): number => {
  let homeTeamGoalsFavorQuantity = 0;

  games.forEach((game) => {
    homeTeamGoalsFavorQuantity += game.homeTeamGoals;
  });
  return homeTeamGoalsFavorQuantity;
};

const homeTeamsGoalsOwn = (games: Array<Matchs>): number => {
  let homeTeamGoalsOwnQuantity = 0;

  games.forEach((game) => {
    homeTeamGoalsOwnQuantity += game.awayTeamsGoals;
  });

  return homeTeamGoalsOwnQuantity;
};

const homeTeamsGoalsBalance = (games: Array<Matchs>): number => {
  const goalsFavor = homeTeamsGoalsFavor(games);
  const goalsOwn = homeTeamsGoalsOwn(games);
  const goalsBalance = goalsFavor - goalsOwn;

  return goalsBalance;
};

const homeGameResults = async () => {
  let totalGames = 0;
  // let totalVictories = 0;
  // let totalDraws = 0;
  // let totalLosses = 0;
  let goalsFavor: any = 0;
  // let goalsOwn = 0;

  const homeGames = await homeTeamGames();

  totalGames = homeGames[0].games.length;
  goalsFavor = homeTeamsGoalsFavor(homeGames[0].games);

  return { totalGames, goalsFavor };
};

export {
  homeTeamsTotalPoints,
  homeTeamsTotalGames,
  homeTeamsVictories,
  homeTeamsDraws,
  homeTeamsLosses,
  homeTeamsGoalsFavor,
  homeTeamsGoalsOwn,
  homeTeamsGoalsBalance,
  homeGameResults,
  homeTeamGames,
};
