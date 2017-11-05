import { getScores } from '../utils/api';
import {
  fetchScoresDataCompleted,
  fetchScoresDataFailed,
  fetchScoresDataStarted
} from './scoresActionCreators';

export function fetchScoresData(dispatch, date){
  dispatch(fetchScoresDataStarted());
  return getScores(date)
    .then( data => {
      const games = data.games;
      dispatch(fetchScoresDataCompleted(games, date));
    }).catch( err => {
      dispatch(fetchScoresDataFailed(err));
    });
}
