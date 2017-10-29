import moment from 'moment';
import {
  FETCH_SCORES_DATA_STARTED,
  FETCH_SCORES_DATA_FAILED,
  FETCH_SCORES_DATA_COMPLETED,
} from '../actions/scoresActions';

const initialState = {
  isLoading: false,
  games: [],
  scoresDate: moment(),
};

const scores = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_SCORES_DATA_STARTED:
      return Object.assign({}, currentState, { isLoading: true });
    case FETCH_SCORES_DATA_COMPLETED:
      return { games: action.payload.games, isLoading: false, scoresDate: action.payload.date };
    case FETCH_SCORES_DATA_FAILED:
      return { games: action.err, isLoading: false, scoresDate: action.payload.date };
    default: return currentState;
  }
};

export default scores;
