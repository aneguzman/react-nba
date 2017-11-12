import {
  FETCH_SCORES_DATA_COMPLETED,
  FETCH_SCORES_DATA_STARTED,
  FETCH_SCORES_DATA_FAILED,
} from '../constants/actionTypes';

/**
 * Action creator for fetch scores data completed action.
 * @param {array<Object>} games - The array of games for the selected date.
 * @param {string} date - The selected date.
 * @return {Object} the action to be dispatched.
 */
export const fetchScoresDataCompleted = (games, date) => ({
  type: FETCH_SCORES_DATA_COMPLETED,
  payload: {
    games,
    date,
  },
});

/**
 * Action creator for fetch scores data started action.
 * @return {Object} the action to be dispatched.
 */
export const fetchScoresDataStarted = () => ({
  type: FETCH_SCORES_DATA_STARTED,
  payload: {
    games: [],
  },
});

/**
 * Action creator for fetch scores data failed action.
 * @param {Object} err - the error obj returned by the ajax call.
 * @return {Object} - the action to be dispatched.
 */
export const fetchScoresDataFailed = (error, date) => ({
  type: FETCH_SCORES_DATA_FAILED,
  payload: {
    error,
    date,
  },
});

export default {
  fetchScoresDataCompleted,
  fetchScoresDataFailed,
  fetchScoresDataStarted,
};
