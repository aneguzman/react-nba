import React from 'react';
import StandingRow from './StandingRow';

const StandingRowList = (props) => {
  return (
    <tbody>
      { props.standings.map(standing => <StandingRow  key={ standing.teamId } {...standing} />)}
    </tbody>
  );
}

export default StandingRowList;