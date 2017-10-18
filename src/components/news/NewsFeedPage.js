import React from 'react';
import NewsList from './NewsList';
let convert = require('xml-js');
import PropTypes from 'prop-types';

class NewsFeedPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            news: []
        };
    }

    componentWillMount(){
        this.getNews();
    } 

    getNews(){
        fetch('http://localhost:3000/api/news')
            .then((response) => {
                return response.text();
            })
            .then((xmlText) => {
                var jsonData = convert.xml2json(xmlText, {compact: true, spaces: 4});
                var news = JSON.parse(jsonData).rss.channel.item
                this.setState({ news: news})
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            }); 
    }

    render(){
        return (
            <div>
                <h1>Feed</h1>
                <NewsList news={this.state.news} />
            </div>
        ); 
    }
}

export default NewsFeedPage;