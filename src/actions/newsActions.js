import { getNews } from '../utils/api';
import {
  fetchNewsDataCompleted,
  fetchNewsDataFailed,
  fetchNewsDataStarted,
} from './newsActionCreators';

export const fetchNewsData = (dispatch, page) => {
  dispatch(fetchNewsDataStarted());
  return getNews(page)
    .then((data) => {
      dispatch(fetchNewsDataCompleted(data));
    })
    .catch((err) => {
      dispatch(fetchNewsDataFailed(err));
    });
};

export default {
  fetchNewsData,
};
