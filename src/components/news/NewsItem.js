import React from 'react';
import { Col } from 'elemental';
import PropTypes from 'prop-types';
import './news.css';
import {
  getFeedItemClass,
  getFormattedDate,
} from '../../utils/common';
import { FULL_DATE_FORMAT } from '../../constants/constants';

const NewsItem = ({ index, pubDate, title, thumbnail }) => {
  const feedClass = getFeedItemClass(index);
  const feedDate = getFormattedDate(FULL_DATE_FORMAT, pubDate);
  return (
    <Col className={feedClass}>
      <img className="feed__img" src={thumbnail} alt={title} />
      <Col className="feed__date">
        <span className="feed__date-span">
          {feedDate}
        </span>
      </Col>
      <Col className="feed__title">
        <h2 className="feed__title-h2">{title}</h2>
      </Col>
    </Col>
  );
};

NewsItem.propTypes = {
  title: PropTypes.string.isRequired,
  pubDate: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default NewsItem;
