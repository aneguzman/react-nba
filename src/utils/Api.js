import {
  XML_TO_JSON_CONFIG,
  CORS_PROXY_URL,
  NEWS_API_URL,
} from '../constants/constants';
import { getScoresApiUrl, getStandingsApiUrl } from './common';

const convert = require('xml-js');

/**
 * Gets the list of scores information of a current date.
 * @param string - date - The date of the scores to be fetched.
 * @return {Promise} - A promise with the scores data or an error object.
 */
export const getScores = date => fetch(getScoresApiUrl(CORS_PROXY_URL, date))
  .then(response => response.json())
  .then(data => data)
  .catch(error => error);

/**
 * Gets the list of NBA news..
 * @return {Promise} - A promise with the news data or an error object.
 */
export const getNews = () => fetch(NEWS_API_URL)
  .then(response => response.text())
  .then((xmlText) => {
    const jsonData = convert.xml2json(xmlText, XML_TO_JSON_CONFIG);
    const news = JSON.parse(jsonData).rss.channel.item;
    return news;
  })
  .catch(error => error);

/**
 * Gets the list of standings information for the east and west NBA conferences.
 * @return {Promise} - A promise with the standings data or an error object.
 */
export const getStandings = () => fetch(getStandingsApiUrl(CORS_PROXY_URL))
  .then(response => response.json())
  .then(data => data)
  .catch(error => error);

export default {
  getScores,
  getNews,
  getStandings,
};
