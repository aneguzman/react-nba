import React from 'react';
import ScoreCardList from './ScoreCardList';
import DatePicker from 'react-datepicker';
import { Spinner } from 'elemental';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './scores.css';

class ScoresPage extends React.Component {
  constructor(props){
    super(props);
    this.handleDatePicker = this.handleDatePicker.bind(this);
  }

  handleDatePicker(date){
    this.getScores(date);
  }

  getScores(date){
    const { fetchScoresData, isLoading } = this.props;
    if(!isLoading) fetchScoresData(date);
  }

  componentWillMount(){
    this.getScores(moment());
  }

  render(){
    const { scoresDate, games, isLoading } = this.props;
    return (
      <div>
        <h2>NBA Scores</h2>
        <DatePicker
          selected={ scoresDate }
          onChange={ this.handleDatePicker }
          className='date-picker'/>
        { !isLoading && <ScoreCardList games={games } /> }
        { isLoading && <Spinner size='lg'/> }
      </div>
    ); 
  }
}
export default ScoresPage;
