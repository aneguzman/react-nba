import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './scores.css';

const ScoreTimeInfo = (props) => (
  <span>
    { props.gameStatus === 1 ? (
      <span>
        { props.startTimeET ? props.startTimeET.split('ET')[0]
          : moment(props.startTimeUTC).format('hh:mm A') }
      </span>
    ) : props.gameStatus === 2 ? (
      <span>
        <span>{ props.clock }</span>&nbsp;&nbsp;
        <span>
          { props.currentPeriod }
          { props.currentPeriod === 1? 'st' : props.currentPeriod === 2 ? 'nd'
            : props.currentPeriod === 3 ? 'rd': 'th' }
        </span>
      </span>
    ) : (
      <span>FINAL</span>
    )
    }
  </span>
);

ScoreTimeInfo.propTypes = {
  startTimeET: PropTypes.string,
  startTimeUTC: PropTypes.string,
  currentPeriod: PropTypes.number,
  clock: PropTypes.string.isRequired,
  gameStatus: PropTypes.number.isRequired,
};

export default ScoreTimeInfo;
