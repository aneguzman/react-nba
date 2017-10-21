import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import Main from './components/Main';
import NewsFeedPage from './components/news/NewsFeedPage';
import ScoresPage from './components/scores/ScoresPage';
import StandingsPage from './components/standings/StandingsPage';
import StatsPage from './components/stats/StatsPage';

const store = createStore(reducers);

const App = () => (
    <Provider store={ store }>
        <Main>
            <Switch>
                <Route path="/feed" component={NewsFeedPage}/>
                <Route path="/scores" component={ScoresPage}/>
                <Route path="/standings" component={StandingsPage}/>
                <Route path="/stats" component={StatsPage}/>
            </Switch>
        </Main>
    </Provider>
);

export default App;
