import { combineReducers } from 'redux';
import scores from './scores';
import news from './news';

export default combineReducers({
    scores,
    news
});