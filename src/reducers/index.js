import { combineReducers } from 'redux';
import scores from './scores';
import news from './news';
import standings from './standings';

export default combineReducers({
  scores,
  news,
  standings,
});
