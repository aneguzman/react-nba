import { createStore } from 'redux';
import devToolsEnhancer from 'remote-redux-devtools';
import reducers from './reducers';

const store = createStore(reducers, devToolsEnhancer({ realtime: true }));

export default store;
