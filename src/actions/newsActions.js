import { getNews } from '../utils/api';
import {
  fetchNewsDataCompleted,
  fetchNewsDataFailed,
  fetchNewsDataStarted
} from './newsActionCreators';
  
export function fetchNewsData(dispatch){
  dispatch(fetchNewsDataStarted());
  return getNews()
  .then( data => {
    dispatch(fetchNewsDataCompleted(data));
  }).catch( err => {
    dispatch(fetchNewsDataFailed(err));
  });
}