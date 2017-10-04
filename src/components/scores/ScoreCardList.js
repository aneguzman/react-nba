import React from 'react';
import ScoreCard from './ScoreCard';

const ScoreCardList = (props) => {
    return (
      <div>
            {props.games.map( game => <ScoreCard {...game} /> )}
      </div>
    )
  }

  export default ScoreCardList;