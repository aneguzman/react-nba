import { 
  FETCH_NEWS_DATA_COMPLETED, 
  FETCH_NEWS_DATA_STARTED, 
  FETCH_NEWS_DATA_FAILED 
} from '../constants/actionTypes';

/**
 * Action creator for fetch news data completed action.
 * @param {*} news - The array of news.
 * @return {*} the action to be dispatched.
 */
export const fetchNewsDataCompleted = (news) => ({
  type: FETCH_NEWS_DATA_COMPLETED,
  payload: {
    news
  },
});

/**
 * Action creator for fetch news data started action.
 * @return {*} the action to be dispatched.
 */
export const fetchNewsDataStarted = () => ({
  type: FETCH_NEWS_DATA_STARTED,
  payload: {
    news: []
  },
});

/**
 * Action creator for fetch news data failed action.
 * @param {*} err - the error obj returned by the ajax call.
 * @return {*} - the action to be dispatched.
 */
export const fetchNewsDataFailed = (err) => ({
  type: FETCH_NEWS_DATA_FAILED,
  payload: {
    error: err
  },
});

export default {
  fetchNewsDataCompleted,
  fetchNewsDataFailed,
  fetchNewsDataStarted,
};
