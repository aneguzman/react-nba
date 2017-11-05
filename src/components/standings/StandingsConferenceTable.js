import React from 'react';
import { Table } from 'elemental';
import PropTypes from 'prop-types';
import StandingRowList from './StandingRowList';
import './standings.css';

const StandingsConferenceTable = (props) => {
  const body = props.standings ? <StandingRowList standings={props.standings} /> : <tbody />;
  return (
    <Table className="standings-table">
      <colgroup>
        <col width="40%" />
        <col width="20%" />
        <col width="20%" />
        <col width="20%" />
      </colgroup>
      <thead>
        <tr>
          <th>{props.conference}</th>
          <th>W-L</th>
          <th>PCT</th>
          <th>GB</th>
        </tr>
      </thead>
      {body}
    </Table>
  );
};

StandingsConferenceTable.propTypes = {
  conference: PropTypes.string.isRequired,
  standings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StandingsConferenceTable;
