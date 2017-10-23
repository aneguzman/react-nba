import React from 'react';
import { connect } from 'react-redux';
import NewsList from './NewsList';
let convert = require('xml-js');
import PropTypes from 'prop-types';
import { fetchNewsData } from '../../actions/newsActions';

@connect((store) => {
    return {
        news: store.news.news,
        isLoading: store.news.isLoading
    }
})

class NewsFeedPage extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        this.getNews();
    } 

    getNews(){
        fetchNewsData(this.props.dispatch);
    }

    render(){
        return (
            <div>
                <h1>Feed</h1>
                <NewsList news={this.props.news} />
            </div>
        ); 
    }
}

export default NewsFeedPage;