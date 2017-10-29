import React from 'react';
import NewsList from './NewsList';
import PropTypes from 'prop-types';
import { Spinner } from 'elemental';

class NewsFeedPage extends React.Component{

  componentWillMount() {
    const { fetchNewsData, isLoading } = this.props;
    if(!isLoading) fetchNewsData();
  } 

  render() {
    const { isLoading, news } = this.props;
    return (
      <div>
        <h1>Feed</h1>
        { isLoading && <Spinner size='lg' /> }
        { !isLoading && <NewsList news={ news } /> }
      </div>
    ); 
  }
}

NewsFeedPage.propTypes = {
  fetchNewsData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsFeedPage;
