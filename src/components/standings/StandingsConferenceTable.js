import React from 'react';
import { Table } from 'elemental';
import PropTypes from 'prop-types';
import StandingRowList from './StandingRowList';
import './standings.css';
import { TABLE_HEADER_WIDTH } from '../../constants/constants';

const StandingsConferenceTable = ({ standings, conference }) => {
  const body = standings ? <StandingRowList standings={standings} /> : <tbody />;
  return (
    <Table className="standings-table">
      <colgroup>
        <col width={TABLE_HEADER_WIDTH.WIDE} />
        <col width={TABLE_HEADER_WIDTH.NORMAL} />
        <col width={TABLE_HEADER_WIDTH.NORMAL} />
        <col width={TABLE_HEADER_WIDTH.NORMAL} />
      </colgroup>
      <thead>
        <tr>
          <th className="standings-table__th">{conference}</th>
          <th className="standings-table__th">W-L</th>
          <th className="standings-table__th">PCT</th>
          <th className="standings-table__th">GB</th>
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
