import {
  FETCH_NEWS_DATA_STARTED,
  FETCH_NEWS_DATA_FAILED,
  FETCH_NEWS_DATA_COMPLETED,
} from '../constants/actionTypes';

const initialState = {
  isLoading: false,
  news: [],
};

const news = (currentState = initialState, action) => {
  switch (action.type) {
    case FETCH_NEWS_DATA_STARTED:
      return Object.assign({}, currentState, { isLoading: true });
    case FETCH_NEWS_DATA_COMPLETED:
      return Object.assign(
        {},
        currentState,
        {
          news: action.payload.news,
          isLoading: false,
        },
      );
    case FETCH_NEWS_DATA_FAILED:
      return Object.assign(
        {},
        currentState,
        {
          news: [],
          isLoading: false,
          error: action.payload.error,
        },
      );
    default: return currentState;
  }
};

export default news;
