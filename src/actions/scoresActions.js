import { getScores } from '../utils/Api';
import moment from 'moment';

export const FETCH_SCORES_DATA_STARTED = 'FECTH_SCORES_DATA_STARTED';
export const FETCH_SCORES_DATA_FAILED = 'FECTH_SCORES_DATA_FAILED';
export const FETCH_SCORES_DATA_COMPLETED = 'FECTH_SCORES_DATA_COMPLETED';

export function fetchScoresData(dispatch, date){
    dispatch({
        type: FETCH_SCORES_DATA_STARTED,
        payload: ''
    });

    return getScores(date.format('YYYYMMDD'))
    .then( data => {
        dispatch({
            type: FETCH_SCORES_DATA_COMPLETED,
            payload: {
                games: data.games,
                date: date
            }
        });
    }).catch( err => {
        console.log('parsing failed', ex);

        dispatch({
            type: FETCH_SCORES_DATA_FAILED,
            isError: true,
            payload: {
                err: err,
                date: date
            }
        });
    });
}