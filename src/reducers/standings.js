import {
  FETCH_STANDINGS_DATA_STARTED,
  FETCH_STANDINGS_DATA_FAILED,
  FETCH_STANDINGS_DATA_COMPLETED,
} from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  eastStandings: [],
  westStandings: [],
  isError: false,
};

const standings = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_STANDINGS_DATA_STARTED:
      return Object.assign({}, currentState, { isLoading: true });
    case FETCH_STANDINGS_DATA_COMPLETED:
      return Object.assign(
        {},
        currentState,
        {
          eastStandings: action.payload.eastStandings,
          westStandings: action.payload.westStandings,
          isLoading: false,
        });
    case FETCH_STANDINGS_DATA_FAILED:
      return Object.assign(
        {},
        currentState,
        {
          eastStandings: [],
          westStandings: [],
          isLoading: false,
          error: action.payload.error.typeError,
          isError: true,
        });
    default: return currentState;
  }
};

export default standings;
