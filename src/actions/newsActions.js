import { getNews } from '../utils/api';

export const FETCH_NEWS_DATA_STARTED = 'FETCH_NEWS_DATA_STARTED';
export const FETCH_NEWS_DATA_FAILED = 'FETCH_NEWS_DATA_FAILED';
export const FETCH_NEWS_DATA_COMPLETED = 'FETCH_NEWS_DATA_COMPLETED';

export function fetchNewsData(dispatch){
    dispatch({
        type: FETCH_NEWS_DATA_STARTED,
        payload: ''
    });

    return getNews()
    .then( data => {
        dispatch({
            type: FETCH_NEWS_DATA_COMPLETED,
            payload: {
                news: data
            }
        });
    }).catch( err => {
        dispatch({
            type: FETCH_NEWS_DATA_FAILED,
            isError: true,
            payload: {
                err: err
            }
        });
    });
}