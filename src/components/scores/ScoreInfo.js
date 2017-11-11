import React from 'react';
import { Row, Col } from 'elemental';
import PropTypes from 'prop-types';
import './scores.css';
import { getTeamImageUrl } from '../../constants/constants';

const ScoreInfo = ({ triCode, score }) => {
  const teamImageUrl = getTeamImageUrl(triCode);
  return (
    <div>
      <Row className="score-info">
        <Col sm="3/4">
          <span>
            <img src={teamImageUrl} className="score-info__logo" alt="" />
          </span>
          <span className="score-info__team-name">
            {triCode}
          </span>
        </Col>
        <Col sm="1/4" className="score-info_score">
          <span>{score}</span>
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
