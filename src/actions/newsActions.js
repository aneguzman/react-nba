import { getNews } from '../utils/api';
import {
  fetchNewsDataCompleted,
  fetchNewsDataFailed,
  fetchNewsDataStarted
} from './newsActionCreators';
  
export function fetchNewsData(dispatch, page){
  dispatch(fetchNewsDataStarted());
  return getNews(page)
  .then( data => {
    dispatch(fetchNewsDataCompleted(data));
  })
  .catch( err => {
    dispatch(fetchNewsDataFailed(err));
  });
}
