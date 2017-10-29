import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { Spinner } from 'elemental';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import ScoreCardList from './ScoreCardList';
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
    if (!isLoading) fetchScoresData(date);
  }

  handleDatePicker(date) {
    this.getScores(date);
  }

  render() {
    const { scoresDate, games, isLoading } = this.props;
    return (
      <div>
        <h2>NBA Scores</h2>
        <DatePicker
          selected={scoresDate}
          onChange={this.handleDatePicker}
          className="date-picker"
        />
        { !isLoading && <ScoreCardList games={games} /> }
        { isLoading && <Spinner size="lg" /> }
      </div>
    );
  }
}

ScoresPage.propTypes = {
  fetchScoresData: PropTypes.func.isRequired,
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
  scoresDate: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default ScoresPage;
