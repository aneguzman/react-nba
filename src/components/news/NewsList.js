import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import { Row } from 'elemental';
import News from './News';

const NewsList = props => {
  const newsListItems = props.news.map(n => <News key={n.guid._text} {...n} />);
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
