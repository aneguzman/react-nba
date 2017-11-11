import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Spinner } from 'elemental';
import 'react-datepicker/dist/react-datepicker.css';
import ScoreCardList from './ScoreCardList';
import Error from '../common/error';
import { API_DATE_FORMAT } from '../../constants/constants';
import './scores.css';

class ScoresPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleDatePicker = this.handleDatePicker.bind(this);
  }

  componentWillMount() {
    this.getScores(moment());
  }

  getScores(date) {
    const { fetchScoresData, isLoading } = this.props;
    if (!isLoading) fetchScoresData(date.format(API_DATE_FORMAT));
  }

  handleDatePicker(date) {
    this.getScores(date);
  }

  render() {
    const { scoresDate, games, isLoading, isError } = this.props;
    return (
      <div>
        <h2>NBA Scores</h2>
        <DatePicker
          selected={moment(scoresDate)}
          onChange={this.handleDatePicker}
          className="date-picker"
        />
        {!isLoading && <ScoreCardList games={games} />}
        {isLoading && <Spinner size="lg" />}
        {!isLoading && isError && <Error />}
      </div>
    );
  }
}

ScoresPage.defaultProps = {
  isError: false,
};

ScoresPage.propTypes = {
  fetchScoresData: PropTypes.func.isRequired,
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  scoresDate: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool,
};

export default ScoresPage;
