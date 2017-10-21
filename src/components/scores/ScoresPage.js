import React from 'react';
import { connect } from 'react-redux';
import ScoreCardList from './ScoreCardList';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './scores.css';
import { fetchScoresData } from '../../actions/scoresActions';

@connect((store) => {
    return {
        games: store.scores.games,
        isLoading: store.scores.isLoading,
        scoresDate: store.scores.scoresDate
    };
})

class ScoresPage extends React.Component{
    constructor(props){
        super(props);
        this.handleDatePicker = this.handleDatePicker.bind(this);
    }

    handleDatePicker(date){
        this.getScores(date);  
    }

    getScores(date){
        fetchScoresData(this.props.dispatch, date)
    }

    componentWillMount(){
        this.getScores(moment());
    }

    render(){
        return (
            <div>
                <h2>NBA Scores</h2>
                <DatePicker
                    selected={this.props.scoresDate}
                    onChange={this.handleDatePicker}
                    className='date-picker'
                />
                <ScoreCardList games={this.props.games} />
            </div>
        ); 
    }
}

export default ScoresPage;
