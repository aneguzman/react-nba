import React from 'react';
import { Col } from 'elemental';
import moment from 'moment';
import PropTypes from 'prop-types';
import './news.css';

const News = (props) => {
  const feedClass = props.index % 3 == 0 ? 'feed big' : 'feed normal';
  return (
    <Col className={feedClass}>
      <img src={props['media:content']._attributes.url} alt="" />
      <Col className="feed-date">
        <span >{moment(props.pubDate._text).format('Do MMMM YYYY')}</span>
      </Col>
      <Col className="feed-title">
        <h2>{props.title._text}</h2>
      </Col>
    </Col>
  );
}

News.propTypes = {
  title: PropTypes.instanceOf(Object).isRequired,
  pubDate: PropTypes.instanceOf(Object).isRequired,
  'media:content': PropTypes.instanceOf(Object).isRequired,
};

export default News;
