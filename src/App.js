import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Main from './components/Main';
import NewsContainer from './containers/NewsContainer';
import ScoresContainer from './containers/ScoresContainer';
import StandingsContainer from './containers/StandingsContainer';
import StatsPage from './components/stats/StatsPage';

const store = createStore(reducers);

const App = () => (
    <Provider store={ store }>
        <Main>
            <Switch>
                <Route path="/feed" component={ NewsContainer }/>
                <Route path="/scores" component={ ScoresContainer }/>
                <Route path="/standings" component={ StandingsContainer }/>
                <Route path="/stats" component={ StatsPage }/>
            </Switch>
        </Main>
    </Provider>
);

export default App;
