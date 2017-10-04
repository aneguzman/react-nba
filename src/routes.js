import React from 'react';
import { Route, IndexRoute, NotFoundRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import ScoresPage from './components/scores/ScoresPage';
import StandingsPage from './components/standings/StandingsPage';
import StatsPage from './components/stats/StatsPage';

export default (
    <Route path="/" component={ App }>
        <Route path="feed" component={ HomePage } />
        <Route path="scores" component={ ScoresPage } />
        <Route path="standings" component={ StandingsPage } />
        <Route path="stats" component={ StatsPage } />
        <Route path="*" component={ HomePage } />
    </Route>
);
