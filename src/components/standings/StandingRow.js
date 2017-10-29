import React from 'react';
import { TEAMS_INFO } from '../../utils/teamsInfo';
import './standings.css';

const StandingRow = (props) => {
  const team = TEAMS_INFO.filter(team => team.teamId == props.teamId)[0];
  const imgSrc = `https://cdn.nba.net/assets/logos/teams/secondary/web/${team.tricode}.svg`
  return(
    <tr>
      <td>
        <img src={imgSrc}/>

        { team.city }
      </td>
      <td>{ props.win } - { props.loss }</td>
      <td>{ props.winPct }</td>
      <td>{ props.gamesBehind }</td>
    </tr>
  )
};

export default StandingRow;
