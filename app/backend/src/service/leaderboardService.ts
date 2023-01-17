import Matchs from '../database/models/MatchesModel';
// import Teams from '../database/models/TeamsModel';

// import { homeTeamGames } from '../helpers/calculatePoints';

const homeTeamLeaderboard = async () => {
  const teamLb = await Matchs.sequelize?.query(`SELECT teams.team_name AS 'name',
  SUM(matches.home_team_goals > matches.away_team_goals)
  * 3 + SUM(matches.home_team_goals = matches.away_team_goals) AS 'totalPoints',
  SUM(matches.in_progress = FALSE) AS 'totalGames',
  SUM(matches.home_team_goals > matches.away_team_goals) AS 'totalVictories',
  SUM(matches.home_team_goals = matches.away_team_goals) AS 'totalDraws',
  SUM(matches.home_team_goals < matches.away_team_goals) AS 'totalLosses',
  SUM(matches.home_team_goals) AS 'goalsFavor',
  SUM(matches.away_team_goals) AS 'goalsOwn',
  SUM(matches.home_team_goals - matches.away_team_goals) AS 'goalsBalance',
  ROUND((SUM(matches.home_team_goals > matches.away_team_goals)
  * 3 + SUM(matches.home_team_goals = matches.away_team_goals))
  / (SUM(matches.in_progress = FALSE) * 3) * 100, 2) AS 'efficiency'
  FROM matches
  INNER JOIN teams ON matches.home_team = teams.id AND in_progress = FALSE
  GROUP BY teams.team_name ORDER BY totalPoints DESC, totalVictories DESC,
   goalsBalance DESC, goalsFavor DESC, goalsOwn DESC`);

  return teamLb;
};

// export default { homeTeamLeaderboard, xablau };
export default { homeTeamLeaderboard };
