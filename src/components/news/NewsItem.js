import React from 'react';
import { Col } from 'elemental';
import moment from 'moment';
import PropTypes from 'prop-types';
import './news.css';

const NewsItem = (props) => {
  const feedClass = props.index % 3 == 0 ? 'feed big' : 'feed normal';
  return (
    <Col className={feedClass}>
      <img src={props.media.attributes.url} alt="" />
      <Col className="feed-date">
        <span >{moment(props.pubDate.text).isValid() ? moment(props.pubDate.text).format('Do MMMM YYYY') : moment().format('Do MMMM YYYY')}</span>
      </Col>
      <Col className="feed-title">
        <h2>{props.title.text}</h2>
      </Col>
    </Col>
  );
}

NewsItem.propTypes = {
  title: PropTypes.instanceOf(Object).isRequired,
  pubDate: PropTypes.instanceOf(Object).isRequired,
  media: PropTypes.instanceOf(Object).isRequired,
};

export default NewsItem;
