import React from 'react';
import ScoreCard from './ScoreCard';
import PropTypes from 'prop-types';

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