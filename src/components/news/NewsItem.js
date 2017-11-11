import React from 'react';
import { Col } from 'elemental';
import moment from 'moment';
import PropTypes from 'prop-types';
import './news.css';
import { getFeedItemClass } from '../../utils/common';

const NewsItem = ({ index, pubDate, title, thumbnail }) => {
  const feedClass = getFeedItemClass(index);
  const pubDateMoment = moment(pubDate);
  const date = pubDateMoment.isValid() ? pubDateMoment.format('Do MMMM YYYY') : moment().format('Do MMMM YYYY');
  return (
    <Col className={feedClass}>
      <img className="feed__img" src={thumbnail} alt={title} />
      <Col className="feed__date">
        <span className="feed__date-span">
          {date}
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
