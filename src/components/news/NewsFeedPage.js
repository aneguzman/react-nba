import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'elemental';
import NewsList from './NewsList';
import Error from '../common/error';

class NewsFeedPage extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    const { fetchNewsData, isLoading, page } = this.props;
    if (!isLoading) fetchNewsData(page);
  }

  render() {
    const { isLoading, news, isError } = this.props;
    return (
      <div>
        <h1>Feed</h1>
        {isLoading && <Spinner size="lg" />}
        {!isLoading && <NewsList news={news} /> }
        {!isLoading && isError && <Error /> }
      </div>
    );
  }
}

NewsFeedPage.propTypes = {
  fetchNewsData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
  isError: PropTypes.bool.isRequired,
};

export default NewsFeedPage;
