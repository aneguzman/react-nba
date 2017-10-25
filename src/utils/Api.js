const convert = require('xml-js');

// const corsProxy = 'https://cors-anywhere.herokuapp.com/';
const newsApiUrl = 'https://feeds.thescore.com/nba.rss';
const standingsUrl = 'http://localhost:3000/api/standings/';

// export const getScores = date => fetch(`${corsProxy}http://data.nba.net/prod/v1/${date}/scoreboard.json`)
export const getScores = date => fetch(`http://localhost:3000/api/scores?date=${date}`)
  .then(response => response.json())
  .then(data => data);

export const getNews = () => fetch(newsApiUrl)
  .then(response => response.text())
  .then((xmlText) => {
    const jsonData = convert.xml2json(xmlText, { compact: true, spaces: 4 });
    const news = JSON.parse(jsonData).rss.channel.item;
    return news;
  });

export const getStandings = () => fetch(standingsUrl)
  .then(response => response.json())
  .then(data => data);

export default {
  getScores,
  getNews,
};
