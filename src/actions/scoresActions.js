import { getScores } from '../utils/api';
import {
  fetchScoresDataCompleted,
  fetchScoresDataFailed,
  fetchScoresDataStarted
} from './scoresActionCreators';

export function fetchScoresData(dispatch, date){
  dispatch(fetchScoresDataStarted());
  return getScores(date)
    .then(({ games }) => {
      dispatch(fetchScoresDataCompleted(games, date));
    })
    .catch((error) => {
      dispatch(fetchScoresDataFailed(error, date));
    });
}
