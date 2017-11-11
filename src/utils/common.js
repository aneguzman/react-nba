import moment from 'moment';
import { 
  GAME_PERIOD,
  PERIOD_SUFIX
} from '../constants/constants';

/**
 * Gets feed item class depending on the index in the array.
 * @param {string} - index - The index of the array.
 * @return {string} - the class names that will be applied to the feed item.
 */
export const getFeedItemClass = index => index % 3 == 0 ? 'feed feed--big' : ' feed feed--normal';

/**
 * Returns a date formatted in an specific format.
 * @param {string} - format - The format of the date.
 * @param {string} - date - The date to be formatted.
 * @return {string} - The date already formatted.
 */
export const getFormattedDate = (format, date) => {
  return date && moment(date).isValid() ? moment(date).format(format) : moment().format(format);
};

/**
 * Get period sufix
 * @param {number} - period - The period of the game.
 * @return {string} - The sufix of the period.
 */
export const getPeriodSufix = (period) => {
  switch(period) {
    case GAME_PERIOD.FIRST:
      return PERIOD_SUFIX.FIRST;
    case GAME_PERIOD.SECOND:
      return PERIOD_SUFIX.SECOND;
    case GAME_PERIOD.THIRD:
      return PERIOD_SUFIX.THIRD;
    case GAME_PERIOD.FOURTH:
      return PERIOD_SUFIX.FOURTH;
    default: 
      return PERIOD_SUFIX.FIRST;
  }
};
  
/**
 * Handle request errors.
 * @param {Promise} - response - The response of the API
 * @return {Promise} - The response promise.
 */
export const handleFetchResponse = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
};

/**
 * Throws error.
 * @param {string} - error - The response error status text.
 */
export const throwResponseError = (error) => {
  throw Error(error);
};

/**
 * Fetch wrapper to handle request errors.
 * @param {string} - url - The url of the request.
 * @return {Promise} - The response promise.
 */
export const getUrl = (url) => {
  return fetch(url)
  .then(response => handleFetchResponse(response))
  .catch(error => throwResponseError(error));
};


export default {
  getFeedItemClass,
  getFormattedDate,
  getPeriodSufix,
  getUrl,
};
