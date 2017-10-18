import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const NewsList = (props) => {
    return (
        <div>
            { props.news.map( n => <News key={n.guid._text} {...n} /> ) }
        </div>
    );
}

NewsList.propTypes = {
    news: PropTypes.array.isRequired
}

export default NewsList;