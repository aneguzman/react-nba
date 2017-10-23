import React from 'react';
import ScoreCardList from './ScoreCardList';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './scores.css';

class ScoresPage extends React.Component{
    constructor(props){
        super(props);
        this.handleDatePicker = this.handleDatePicker.bind(this);
    }

    handleDatePicker(date){
        this.getScores(date);  
    }

    getScores(date){
        this.props.fetchScoresData(date);
    }

    componentWillMount(){
        this.getScores(moment());
    }

    render(){
        console.log(this.props);
        return (
            <div>
                <h2>NBA Scores</h2>
                <DatePicker
                    selected={ this.props.scoresDate }
                    onChange={ this.handleDatePicker }
                    className='date-picker'
                />
                <ScoreCardList games={this.props.games} />
            </div>
        ); 
    }
}

export default ScoresPage;
