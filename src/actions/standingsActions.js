import { getStandings } from '../utils/api';

export const FETCH_STANDINGS_DATA_STARTED = 'FETCH_STANDINGS_DATA_STARTED';
export const FETCH_STANDINGS_DATA_COMPLETED = 'FETCH_STANDINGS_DATA_COMPLETED';
export const FETCH_STANDINGS_DATA_FAILED = 'FETCH_STANDINGS_DATA_FAILED';

export function fetchStandingsData (dispatch) {
  dispatch({
    type: FETCH_STANDINGS_DATA_STARTED,
    payload: '',
  });
  return getStandings()
    .then((data) => {
      dispatch({
        type: FETCH_STANDINGS_DATA_COMPLETED,
        payload: {
          eastStandings: data.league.standard.conference.east,
          westStandings: data.league.standard.conference.west,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_STANDINGS_DATA_FAILED,
        payload: {
          error: err
        },
        isError: true,
      });
    });
}
