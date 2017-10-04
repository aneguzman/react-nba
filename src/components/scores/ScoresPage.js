import React from 'react';
import ScoreCardList from './ScoreCardList';

class ScoresPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {games: []};
    }

    componentWillMount(){
        fetch('http://localhost:3000/api/scores')
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

    render(){
        return (
            <div>
                <h2>NBA Scores</h2>
                <ScoreCardList games={this.state.games} />
            </div>
        ); 
    }
}

export default ScoresPage;
