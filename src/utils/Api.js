let convert = require('xml-js');

// const scoresApiUrl = `http://data.nba.net/prod/v1/${date}/scoreboard.json`;
const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const newsApiUrl = 'https://feeds.thescore.com/nba.rss';

export const getScores = date => fetch(`${corsProxy}http://data.nba.net/prod/v1/${date}/scoreboard.json`)
                    .then( response => response.json())
                    .then( data => data);

export const getNews = fetch(newsApiUrl)
            .then( response => response.text())
            .then( xmlText => {
                var jsonData = convert.xml2json(xmlText, {compact: true, spaces: 4});
                var news = JSON.parse(jsonData).rss.channel.item;
                return news;
            });

export default {
    getScores,
    getNews
}
        

                