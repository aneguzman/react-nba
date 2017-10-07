import React, { PropTypes } from 'react';
import ScoreCard from './ScoreCard';

const ScoreCardList = (props) => {
    return (
      <div>
            {props.games.map( game => <ScoreCard key={game.gameId} {...game} /> )}
      </div>
    )
  }

ScoreCardList.PropTypes = {
  games: PropTypes.array
}
export default ScoreCardList;