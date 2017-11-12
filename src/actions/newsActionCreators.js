import {
  FETCH_NEWS_DATA_COMPLETED,
  FETCH_NEWS_DATA_STARTED,
  FETCH_NEWS_DATA_FAILED,
} from '../constants/actionTypes';

/**
 * Action creator for fetch news data completed action.
 * @param {array<Object>} news - The array of news.
 * @return {Object} the action to be dispatched.
 */
export const fetchNewsDataCompleted = news => ({
  type: FETCH_NEWS_DATA_COMPLETED,
  payload: {
    news,
  },
});

/**
 * Action creator for fetch news data started action.
 * @return {Object} the action to be dispatched.
 */
export const fetchNewsDataStarted = () => ({
  type: FETCH_NEWS_DATA_STARTED,
  payload: {
    news: [],
  },
});

/**
 * Action creator for fetch news data failed action.
 * @param {Object} error - the error obj returned by the ajax call.
 * @return {Object} - the action to be dispatched.
 */
export const fetchNewsDataFailed = error => ({
  type: FETCH_NEWS_DATA_FAILED,
  payload: {
    error,
  },
});

export default {
  fetchNewsDataCompleted,
  fetchNewsDataFailed,
  fetchNewsDataStarted,
};
