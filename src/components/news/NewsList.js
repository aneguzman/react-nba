import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { Row } from 'elemental';
import NewsItem from './NewsItem';
import { MEDIA_CONTENT } from '../../constants/constants';

const NewsList = (props) => {
  const newsListItems = props.news.map( (n, index) => 
    <NewsItem index={index + 1} key={n.guid.text} media={n[MEDIA_CONTENT]} {...n} />
  );
  return (
    <Row className="feed-container">
      <Masonry
        className={'my-gallery-class'}
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
