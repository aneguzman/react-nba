import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from './webpack.config.dev';
import open from 'open';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(__dirname + 'public'));

app.get('*', function(req, res) { //root call
    res.sendFile(path.join( __dirname, './src/index.html'));
});

// var request = require('request');
// app.get('/api/scores/', function(req, res) {
//     var currentDate = req.param('date');
//     request('http://data.nba.net/prod/v1/' + currentDate + '/scoreboard.json', function(error, response, body) {
//         res.json(body);
//     });
// });

// app.get('/api/news/', function(req, res) {
//     request('https://feeds.thescore.com/nba.rss', function(error, response, body) {
//         res.send(body);
//     });
// });

app.listen(port, function(err) {
    if (err) {
        console.log(err);
    } else {
        open(`http://localhost:${port}`);
    }
});