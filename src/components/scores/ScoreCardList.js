import React from 'react';
import PropTypes from 'prop-types';
import ScoreCard from './ScoreCard';

const ScoreCardList = props => (
  <div>
    {props.games.map(game => <ScoreCard key={game.gameId} {...game} />)}
  </div>
);

ScoreCardList.propTypes = {
  games: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ScoreCardList;
