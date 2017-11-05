import {
  FETCH_SCORES_DATA_STARTED,
  FETCH_SCORES_DATA_FAILED,
  FETCH_SCORES_DATA_COMPLETED,
} from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  games: [],
  scoresDate: '',
};

const scores = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_SCORES_DATA_STARTED:
      return Object.assign({}, currentState, { isLoading: true });
    case FETCH_SCORES_DATA_COMPLETED:
      return Object.assign(
        {},
        currentState,
        {
          games: action.payload.games,
          isLoading: false,
          scoresDate: action.payload.date,
        },
      );
    case FETCH_SCORES_DATA_FAILED:
      return Object.assign(
        {},
        currentState,
        {
          games: [],
          isLoading: false,
          scoresDate: action.payload.date,
          error: action.payload.error,
        },
      );
    default: return currentState;
  }
};

export default scores;
