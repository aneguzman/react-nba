/**
 * App constants
 */
export const CORS_PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
export const NEWS_API_URL = 'http://localhost:9000/api/feed?page=';
export const FULL_DATE_FORMAT = 'Do MMMM YYYY';
export const API_DATE_FORMAT = 'YYYYMMDD';
export const DATE_TIME_FORMAT = 'hh:mm A';
export const GAME_STATUS = {
  NOT_STARTED: 1,
  STARTED: 2,
  ENDED: 3,
};
export const GAME_PERIOD = {
  FIRST: 1,
  SECOND: 2,
  THIRD: 3,
  FOURTH: 4,
};
export const PERIOD_SUFIX = {
  FIRST: 'st',
  SECOND: 'nd',
  THIRD: 'rd',
  FOURTH: 'th',
};
export const DEFAULT_TEAM = {
  tricode: 'CLE',
};
export const TABLE_HEADER_WIDTH = {
  NORMAL: '20%',
  WIDE: '40%',
};

/**
 * Gets the team image url
 * @param {string} - teamTriCode - The team name in three characters.
 * @return {string} - the image url.
 */
export const getTeamImageUrl = teamTriCode => (teamTriCode ? `https://cdn.nba.net/assets/logos/teams/secondary/web/${teamTriCode}.svg` : '');

/**
 * Gets scores api url
 * @param {string} - corsProxyUrl - The proxy url.
 * @param {string} - date - The date of the scores to be fetched.
 * @return {string} - the formatted scores api url.
 */
export const getScoresApiUrl = date => `http://localhost:9000/api/scores?date=${date}`;
/**
 * Gets standings api url
 * @param {string} - corsProxyUrl - The proxy url.
 * @return {string} - the formatted standings api url.
 */
export const getStandingsApiUrl = () => 'http://localhost:9000/api/standings';
