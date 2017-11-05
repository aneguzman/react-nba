import React from 'react';
import { Row, Col } from 'elemental';
import PropTypes from 'prop-types';
import './scores.css';
import { getTeamImageUrl } from '../../utils/common';

const ScoreInfo = (props) => {
  const teamImageUrl = getTeamImageUrl(props.triCode);
  return (
    <div>
      <Row className="score-info">
        <Col sm="3/4">
          <span className="team-logo">
            <img src={teamImageUrl} alt="" />
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
