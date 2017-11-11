import React from 'react';
import PropTypes from 'prop-types';
import TEAMS_INFO from '../../constants/teamsInfo';
import './standings.css';
import { getTeamImageUrl } from '../../constants/constants';
import { DEFAULT_TEAM } from '../../constants/constants';

const StandingRow = (props) => {
  const teamArr = TEAMS_INFO.filter(t => t.teamId === props.teamId);
  const team = teamArr && teamArr.length > 0 ? teamArr[0] : DEFAULT_TEAM;
  const imgSrc = getTeamImageUrl(team.tricode);
  return (
    <tr className="standings-table__tr">
      <td className="standings-table__td">
        <img src={imgSrc} alt="Team logo" />
        {team.city}
      </td>
      <td className="standings-table__td">{props.win} - {props.loss}</td>
      <td className="standings-table__td">{props.winPct}</td>
      <td className="standings-table__td">{props.gamesBehind}</td>
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
