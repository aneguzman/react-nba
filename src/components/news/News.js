import React, { PropTypes } from 'react';
import { Row, Col } from 'elemental' ;
import './news.css';
import moment from 'moment';

const News = (props) => {
    return (
        <div>
            <Row className="feed">
                <img src={props['media:content']._attributes.url}/>
                <Col className="feed-date">
                    <span >{moment(props.pubDate._text).format('Do MMMM YYYY')}</span>
                </Col>
                <Col className="feed-title" sm="1" >
                    <h2>{props.title._text}</h2>
                </Col>
                
            </Row>
        </div>
    );
}

News.propTypes = {
    title: PropTypes.object,
    pubDate: PropTypes.object
};

export default News;
