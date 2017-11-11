import get from 'lodash/get';
import { getStandings } from '../utils/api';
import {
  fetchStandingsDataCompleted,
  fetchStandingsDataFailed,
  fetchStandingsDataStarted,
} from './standingsActionCreators';

export const fetchStandingsData = (dispatch) => {
  dispatch(fetchStandingsDataStarted());
  return getStandings()
    .then((data) => {
      const eastStandings = get(data, 'league.standard.conference.east', []);
      const westStandings = get(data, 'league.standard.conference.west', []);
      dispatch(fetchStandingsDataCompleted(eastStandings, westStandings));
    })
    .catch((error) => {
      dispatch(fetchStandingsDataFailed(error));
    });
};

export default {
  fetchStandingsData,
};
