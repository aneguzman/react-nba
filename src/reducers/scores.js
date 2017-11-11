import {
  FETCH_SCORES_DATA_STARTED,
  FETCH_SCORES_DATA_FAILED,
  FETCH_SCORES_DATA_COMPLETED,
} from '../constants/actionTypes';
import { API_DATE_FORMAT } from '../constants/constants';
import { getFormattedDate } from '../utils/common';

const initialState = {
  isLoading: false,
  games: [],
  scoresDate: getFormattedDate(API_DATE_FORMAT),
  isError: false,
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
          isError: true
        },
      );
    default: return currentState;
  }
};

export default scores;
