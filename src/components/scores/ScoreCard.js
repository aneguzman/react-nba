import React from 'react';
import { Card, Row, Col } from 'elemental';
import PropTypes from 'prop-types';
import ScoreInfo from './ScoreInfo';
import ScoreTimeInfo from './ScoreTimeInfo';
import './scores.css';

const ScoreCard = props => (
  <Card className="card">
    <Row className="time-quarter-placeholder">
      <Col sm="1">
        <ScoreTimeInfo
          gameStatus={props.statusNum}
          startTimeET={props.startTimeEastern}
          clock={props.clock}
          startTimeUTC={props.startTimeUTC}
          currentPeriod={props.period.current}
        />
      </Col>
    </Row>
    <ScoreInfo
      triCode={props.vTeam.triCode}
      score={props.vTeam.score}
    />
    <ScoreInfo
      triCode={props.hTeam.triCode}
      score={props.hTeam.score}
    />
  </Card>
);

ScoreCard.propTypes = {
  vTeam: PropTypes.instanceOf(Object).isRequired,
  hTeam: PropTypes.instanceOf(Object).isRequired,
  statusNum: PropTypes.number.isRequired,
  startTimeEastern: PropTypes.string.isRequired,
  startTimeUTC: PropTypes.string.isRequired,
  clock: PropTypes.string.isRequired,
  period: PropTypes.instanceOf(Object).isRequired,
};

export default ScoreCard;
