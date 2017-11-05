import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'elemental';
import NewsList from './NewsList';
import Error from '../common/error';

class NewsFeedPage extends React.Component {
  componentWillMount() {
    const { fetchNewsData, isLoading } = this.props;
    if (!isLoading) fetchNewsData();
  }

  render() {
    const { isLoading, news, error } = this.props;
    return (
      <div>
        <h1>Feed</h1>
        {isLoading && <Spinner size="lg" />}
        {!isLoading && <NewsList news={news} /> }
        {!isLoading && error && <Error /> }
      </div>
    );
  }
}

NewsFeedPage.propTypes = {
  fetchNewsData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
  error: PropTypes.instanceOf(object),
};

export default NewsFeedPage;
