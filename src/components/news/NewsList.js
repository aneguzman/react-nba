import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { Row } from 'elemental';
import NewsItem from './NewsItem';

const NewsList = ({ news }) => {
  const newsListItems = news.map((newsItem, index) => (
      <NewsItem 
        index={index + 1} 
        key={index} 
        {...newsItem} 
      />
    )
  );
  
  return (
    <Row className="feed-container">
      <Masonry
        className="feed-container__my-gallery"
        disableImagesLoaded={false}
        updateOnEachImageLoad={false}
      >
        {newsListItems}
      </Masonry>
    </Row>
  );
};

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsList;
