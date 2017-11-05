import { 
  FETCH_SCORES_DATA_COMPLETED, 
  FETCH_SCORES_DATA_STARTED, 
  FETCH_SCORES_DATA_FAILED 
} from '../constants/actionTypes';

/**
 * Action creator for fetch scores data completed action.
 * @param {*} games - The array of games for the selected date.
 * @param {string} games - The selected date.
 * @return {*} the action to be dispatched.
 */
export const fetchScoresDataCompleted = (games, date) => ({
  type: FETCH_SCORES_DATA_COMPLETED,
  payload: {
    games,
    date
  },
});

/**
 * Action creator for fetch scores data started action.
 * @return {*} the action to be dispatched.
 */
export const fetchScoresDataStarted = () => ({
  type: FETCH_SCORES_DATA_STARTED,
  payload: {
    games: []
  },
});

/**
 * Action creator for fetch scores data failed action.
 * @param {*} err - the error obj returned by the ajax call.
 * @return {*} - the action to be dispatched.
 */
export const fetchScoresDataFailed = (err) => ({
  type: FETCH_SCORES_DATA_FAILED,
  payload: {
    error: err
  },
});

export default {
  fetchScoresDataCompleted,
  fetchScoresDataFailed,
  fetchScoresDataStarted,
};
