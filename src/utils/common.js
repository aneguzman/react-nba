/**
 * Gets the team image url
 * @param string - teamTriCode - The team name in three characters.
 * @return {string} - the image url.
 */
export const getTeamImageUrl = teamTriCode => (teamTriCode ? `https://cdn.nba.net/assets/logos/teams/secondary/web/${teamTriCode}.svg` : '');

/**
 * Gets scores api url
 * @param string - corsProxyUrl - The proxy url.
 * @param string - date - The date of the scores to be fetched.
 * @return {string} - the formatted scores api url.
 */
export const getScoresApiUrl = (corsProxyUrl, date) => `${corsProxyUrl}http://data.nba.net/pro/v1/${date}/scoreboard.json`;

/**
 * Gets standings api url
 * @param string - corsProxyUrl - The proxy url.
 * @return {string} - the formatted standings api url.
 */
export const getStandingsApiUrl = corsProxyUrl => `${corsProxyUrl}http://data.nba.net/10s/prod/v1/current/standings_conference.json`;


export default {
  getTeamImageUrl,
  getScoresApiUrl,
  getStandingsApiUrl,
};
