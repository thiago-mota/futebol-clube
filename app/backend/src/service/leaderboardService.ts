import Matchs from '../database/models/MatchesModel';

const homeTeamLeaderboard = async () => {
  const teamHomeLb = await Matchs.sequelize?.query(`SELECT teams.team_name AS 'name',
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

  if (teamHomeLb) return teamHomeLb[0];
};

const awayTeamLeaderboard = async () => {
  const awayTeamLb = await Matchs.sequelize?.query(`SELECT teams.team_name as 'name',
  SUM(matches.away_team_goals > matches.home_team_goals)
   * 3 + SUM(matches.away_team_goals = matches.home_team_goals) as 'totalPoints',
  SUM(matches.in_progress = FALSE) AS 'totalGames',
  SUM(matches.away_team_goals > matches.home_team_goals) AS 'totalVictories',
  SUM(matches.away_team_goals = matches.home_team_goals) AS 'totalDraws',
  sum(matches.away_team_goals < matches.home_team_goals) as 'totalLosses',
  SUM(matches.away_team_goals) as 'goalsFavor',
  SUM(matches.home_team_goals) as 'goalsOwn',
  SUM(matches.away_team_goals - matches.home_team_goals) as 'goalsBalance',
  ROUND((SUM(matches.away_team_goals > matches.home_team_goals)
  * 3 + SUM(matches.home_team_goals = matches.away_team_goals))
  / (SUM(matches.in_progress = FALSE) * 3) *100, 2) AS 'efficiency' FROM matches
  INNER JOIN teams ON matches.away_team = teams.id AND in_progress = FALSE
  GROUP BY teams.team_name ORDER BY totalPoints DESC, totalVictories DESC
  , goalsBalance DESC, goalsFavor DESC, goalsOwn DESC`);

  if (awayTeamLb) return awayTeamLb[0];
};

export default { homeTeamLeaderboard, awayTeamLeaderboard };
