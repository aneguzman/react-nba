import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import NewsFeedPage from './components/news/NewsFeedPage';
import ScoresPage from './components/scores/ScoresPage';
import StandingsPage from './components/standings/StandingsPage';
import StatsPage from './components/stats/StatsPage';

const App = () => (
    <Main>
        <Switch>
            <Route path="/feed" component={NewsFeedPage}/>
            <Route path="/scores" component={ScoresPage}/>
            <Route path="/standings" component={StandingsPage}/>
            <Route path="/stats" component={StatsPage}/>
        </Switch>
    </Main>
);

export default App;
