import { 
  FETCH_STANDINGS_DATA_COMPLETED, 
  FETCH_STANDINGS_DATA_STARTED, 
  FETCH_STANDINGS_DATA_FAILED 
} from '../constants/actionTypes';

/**
 * Action creator for fetch standings data completed action.
 * @param {*} eastStandings - The array of east conference standings.
 * @param {*} westStandings - The array of west conference standings.
 * @return {*} the action to be dispatched.
 */
export const fetchStandingsDataCompleted = (eastStandings, westStandings) => ({
  type: FETCH_STANDINGS_DATA_COMPLETED,
  payload: {
    eastStandings,
    westStandings
  },
});

/**
 * Action creator for fetch standings data started action.
 * @return {*} the action to be dispatched.
 */
export const fetchStandingsDataStarted = () => ({
  type: FETCH_STANDINGS_DATA_STARTED,
  payload: {
    standings: []
  },
});

/**
 * Action creator for fetch standings data failed action.
 * @param {*} err - the error obj returned by the ajax call.
 * @return {*} - the action to be dispatched.
 */
export const fetchStandingsDataFailed = (err) => ({
  type: FETCH_STANDINGS_DATA_FAILED,
  payload: {
    error: err
  },
});

export default {
  fetchStandingsDataCompleted,
  fetchStandingsDataFailed,
  fetchStandingsDataStarted,
};
