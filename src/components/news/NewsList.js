import React from 'react';
import PropTypes from 'prop-types';
import News from './News';

const NewsList = props => (
  <div>
    {props.news.map(n => <News key={n.guid._text} {...n} />)}
  </div>
);

NewsList.propTypes = {
  news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsList;
