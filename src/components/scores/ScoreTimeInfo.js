import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import './scores.css';
import { 
  GAME_STATUS, 
  GAME_PERIOD,
  PERIOD_SUFIX,
  DATE_TIME_FORMAT
} from '../../constants/constants';
import { getFormattedDate, getPeriodSufix } from '../../utils/common';

const ScoreTimeInfo = props => (
  <span>
    {props.gameStatus === GAME_STATUS.NOT_STARTED &&
      <span>
        {props.startTimeET ? props.startTimeET.split('ET')[0]
          : getFormattedDate(DATE_TIME_FORMAT, props.startTimeUTC)}
      </span>
    }
    {props.gameStatus === GAME_STATUS.STARTED &&
      <span>
        <span>{props.clock}</span>&nbsp;&nbsp;
        <span>
          {props.currentPeriod}
          {getPeriodSufix(props.currentPeriod)}
        </span>
      </span>
    }
    {props.gameStatus === GAME_STATUS.ENDED &&
      <span>FINAL</span>
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
