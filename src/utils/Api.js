import {
  NEWS_API_URL,
  getStandingsApiUrl,
  getScoresApiUrl,
} from '../constants/constants';
import {
  getUrl,
} from './common';

/**
 * Gets the list of scores information of a current date.
 * @param string - date - The date of the scores to be fetched.
 * @return {Promise} - A promise with the scores data or an error object.
 */
export const getScores = date => getUrl(getScoresApiUrl(date))
  .then(response => response.json())
  .then(data => JSON.parse(data));

/**
 * Gets the list of NBA news..
 * @return {Promise} - A promise with the news data or an error object.
 */
export const getNews = page => getUrl(`${NEWS_API_URL}${page}`)
  .then(response => response.json())
  .then(data => data.articles);

/**
 * Gets the list of standings information for the east and west NBA conferences.
 * @return {Promise} - A promise with the standings data or an error object.
 */
export const getStandings = () => getUrl(getStandingsApiUrl())
  .then(response => response.json())
  .then(data => JSON.parse(data));

export default {
  getScores,
  getNews,
  getStandings,
};
