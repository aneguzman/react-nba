import React from 'react';
import ScoreCardList from './ScoreCardList';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './scores.css';

class ScoresPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            games: [],
            startDate: moment()
        };
        this.handleDatePicker = this.handleDatePicker.bind(this);
    }

    handleDatePicker(date){
        this.setState({ startDate: date })
        this.getScores(date);  
    }

    getScores(date){
        fetch('http://localhost:3000/api/scores?date=' + date.format('YYYYMMDD'))
            .then((response) => {
                return response.json();
            })
            .then((data) => {
            let games = JSON.parse(data).games;
                this.setState({ games: games})
            }).catch(function(ex) {
                console.log('parsing failed', ex)
            });
    }

    componentWillMount(){
        this.getScores(moment());
    }

    render(){
        return (
            <div>
                <h2>NBA Scores</h2>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleDatePicker}
                    className='date-picker'
                />
                <ScoreCardList games={this.state.games} />
            </div>
        ); 
    }
}

export default ScoresPage;
