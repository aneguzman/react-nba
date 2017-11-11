import {
  CORS_PROXY_URL,
  NEWS_API_URL,
  getStandingsApiUrl,
  getScoresApiUrl
} from '../constants/constants';

/**
 * Gets the list of scores information of a current date.
 * @param string - date - The date of the scores to be fetched.
 * @return {Promise} - A promise with the scores data or an error object.
 */
export const getScores = date => fetch(getScoresApiUrl(date))
  .then(response => response.json())
  .then(data => JSON.parse(data))
  .catch(error => error);

/**
 * Gets the list of NBA news..
 * @return {Promise} - A promise with the news data or an error object.
 */
export const getNews = (page) => fetch(`${NEWS_API_URL}${page}`)
  .then(response => response.json())
  .then(data => data.articles)
  .catch(error => error);

/**
 * Gets the list of standings information for the east and west NBA conferences.
 * @return {Promise} - A promise with the standings data or an error object.
 */
export const getStandings = () => fetch(getStandingsApiUrl())
  .then(response => response.json())
  .then(data => JSON.parse(data))
  .catch(error => error);

export default {
  getScores,
  getNews,
  getStandings,
};
