import React from 'react';
import PropTypes from 'prop-types';
import TEAMS_INFO from '../../utils/teamsInfo';
import './standings.css';

const StandingRow = (props) => {
  const team = TEAMS_INFO.filter(t => t.teamId === props.teamId)[0];
  const imgSrc = `https://cdn.nba.net/assets/logos/teams/secondary/web/${team.tricode}.svg`;
  return (
    <tr className="standing-row">
      <td>
        <img src={imgSrc} alt="" />
        {team.city}
      </td>
      <td>{props.win} - {props.loss}</td>
      <td>{props.winPct}</td>
      <td>{props.gamesBehind}</td>
    </tr>
  );
};

StandingRow.propTypes = {
  win: PropTypes.string.isRequired,
  loss: PropTypes.string.isRequired,
  winPct: PropTypes.string.isRequired,
  gamesBehind: PropTypes.string.isRequired,
  teamId: PropTypes.string.isRequired,
};

export default StandingRow;
