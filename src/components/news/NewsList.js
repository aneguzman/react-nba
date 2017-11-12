import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { Row } from 'elemental';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  const newsListItems = news.map((newsItem, index) => (
    <NewsItem
      index={index + 1}
      key={newsItem.id}
      {...newsItem}
    />
  ));
  return (
    <div>
      {news.length &&
        <Row className="feed-container">
          <Masonry
            className="feed-container__my-gallery"
            disableImagesLoaded={false}
            updateOnEachImageLoad={false}
          >
            {newsListItems}
          </Masonry>
        </Row>
      }
      {news.length === 0 && <h2 className="error-message">There is no news</h2>}
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsList;
