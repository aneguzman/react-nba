import React from 'react';
import { Row, Col } from 'elemental';
import PropTypes from 'prop-types';
import './scores.css';

const ScoreInfo = (props) => {
  const imgSrc = `https://cdn.nba.net/assets/logos/teams/secondary/web/${props.triCode}.svg`;
  return (
    <div>
      <Row className="score-info">
        <Col sm="3/4">
          <span className="team-logo">
            <img src={imgSrc} alt="" />
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
};

ScoreInfo.propTypes = {
  triCode: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
};

export default ScoreInfo;
