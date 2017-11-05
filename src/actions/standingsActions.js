import { getStandings } from '../utils/api';
import {
  fetchStandingsDataCompleted,
  fetchStandingsDataFailed,
  fetchStandingsDataStarted
} from './standingsActionCreators';

export function fetchStandingsData (dispatch) {
  dispatch(fetchStandingsDataStarted());
  return getStandings()
    .then((data) => {
      const eastStandings = data.league.standard.conference.east;
      const westStandings = data.league.standard.conference.west;
      dispatch(fetchStandingsDataCompleted(eastStandings, westStandings));
    })
    .catch((err) => {
      dispatch(fetchStandingsDataFailed(err));
    });
}
