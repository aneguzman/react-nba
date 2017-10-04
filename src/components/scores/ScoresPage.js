import React from 'react';
import ScoreCard from './ScoreCard';

class ScoresPage extends React.Component{

    render(){
        return (
            <div>

                <h1>NBA Scores</h1>
                <ScoreCard />
            </div>
        ); 
    }
}

export default ScoresPage;
