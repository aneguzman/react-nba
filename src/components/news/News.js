import React from 'react';
import { Col } from 'elemental';
import moment from 'moment';
import PropTypes from 'prop-types';
import './news.css';

const News = props => (
  <Col className="feed" md="32%" sm="100%">
    <img src={props['media:content']._attributes.url} alt="" />
    <Col className="feed-date">
      <span >{moment(props.pubDate._text).format('Do MMMM YYYY')}</span>
    </Col>
    <Col className="feed-title">
      <h2>{props.title._text}</h2>
    </Col>
  </Col>
);

News.propTypes = {
  title: PropTypes.instanceOf(Object).isRequired,
  pubDate: PropTypes.instanceOf(Object).isRequired,
  'media:content': PropTypes.instanceOf(Object).isRequired,
};

export default News;
