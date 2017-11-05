import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './scores.css';
const GAME_HAVE_NOT_STARTED = 1, GAME_STARTED = 2;
const ScoreTimeInfo = props => (
  <span>
    { props.gameStatus === GAME_HAVE_NOT_STARTED ? (
      <span>
        { props.startTimeET ? props.startTimeET.split('ET')[0]
          : moment(props.startTimeUTC).isValid() ? moment(props.startTimeUTC).format('hh:mm A') : moment().format('hh:mm A') }
      </span>
    ) : props.gameStatus === GAME_STARTED ? (
      <span>
        <span>{ props.clock }</span>&nbsp;&nbsp;
        <span>
          { props.currentPeriod }
          { props.currentPeriod === 1 ? 'st' : props.currentPeriod === 2 ? 'nd'
            : props.currentPeriod === 3 ? 'rd': 'th' }
        </span>
      </span>
    ) : (
      <span>FINAL</span>
    )
    }
  </span>
);

ScoreTimeInfo.defaultProps = {
  startTimeET: '',
  startTimeUTC: '',
};

ScoreTimeInfo.propTypes = {
  startTimeET: PropTypes.string,
  startTimeUTC: PropTypes.string,
  currentPeriod: PropTypes.number.isRequired,
  clock: PropTypes.string.isRequired,
  gameStatus: PropTypes.number.isRequired,
};

export default ScoreTimeInfo;
