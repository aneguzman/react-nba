import React from 'react';
import StandingRowList from './StandingRowList';
import { Table } from 'elemental';
import './standings.css';

const StandingsConferenceTable = (props) => {
  let body = null;
  if(props.standings)
    body = <StandingRowList standings={ props.standings } />;
  else{
    body = <tbody></tbody>;
  }
  return (
    <Table className = 'standings-table'>
      <colgroup>
        <col width="40%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
      </colgroup>
      <thead>
        <tr>
          <th>{ props.conference }</th>
          <th>W-L</th>
          <th>PCT</th>
          <th>GB</th>
        </tr>
      </thead>
      { body }
  </Table>
  );
}
export default StandingsConferenceTable;