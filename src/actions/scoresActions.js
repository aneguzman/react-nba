import { getScores } from '../utils/api';
import {
  fetchScoresDataCompleted,
  fetchScoresDataFailed,
  fetchScoresDataStarted,
} from './scoresActionCreators';

export const fetchScoresData = (dispatch, date) => {
  dispatch(fetchScoresDataStarted());
  return getScores(date)
    .then(({ games }) => {
      dispatch(fetchScoresDataCompleted(games, date));
    })
    .catch((error) => {
      dispatch(fetchScoresDataFailed(error, date));
    });
};

export default {
  fetchScoresData,
};
