import React from 'react';
import './scores.css';
import { Row, Col } from 'elemental';
import PropTypes from 'prop-types';

const ScoreInfo = (props) => {
    let imgSrc = `https://cdn.nba.net/assets/logos/teams/secondary/web/${props.triCode}.svg`
    return (
        <div>
            <Row className="score-info">
                <Col sm="3/4">
                    <span className="team-logo">
                        <img src={imgSrc}/>
                    </span>
                    <span className="team-name">
                        {props.triCode}
                    </span>
                </Col>
                <Col sm="1/4" className="score">
                    <span>{props.score}</span>
                </Col>
            </Row>
        </div>
    );
}

ScoreInfo.propTypes = {
    triCode: PropTypes.string,
    score: PropTypes.string
}

export default ScoreInfo;
