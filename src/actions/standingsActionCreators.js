import {
  FETCH_STANDINGS_DATA_COMPLETED,
  FETCH_STANDINGS_DATA_STARTED,
  FETCH_STANDINGS_DATA_FAILED,
} from '../constants/actionTypes';

/**
 * Action creator for fetch standings data completed action.
 * @param {array} eastStandings - The array of east conference standings.
 * @param {array} westStandings - The array of west conference standings.
 * @return {Object} the action to be dispatched.
 */
export const fetchStandingsDataCompleted = (eastStandings, westStandings) => ({
  type: FETCH_STANDINGS_DATA_COMPLETED,
  payload: {
    eastStandings,
    westStandings,
  },
});

/**
 * Action creator for fetch standings data started action.
 * @return {Object} the action to be dispatched.
 */
export const fetchStandingsDataStarted = () => ({
  type: FETCH_STANDINGS_DATA_STARTED,
  payload: {
    standings: [],
  },
});

/**
 * Action creator for fetch standings data failed action.
 * @param {Object} error - the error obj returned by the ajax call.
 * @return {Object} - the action to be dispatched.
 */
export const fetchStandingsDataFailed = error => ({
  type: FETCH_STANDINGS_DATA_FAILED,
  payload: {
    error,
  },
});

export default {
  fetchStandingsDataCompleted,
  fetchStandingsDataFailed,
  fetchStandingsDataStarted,
};
