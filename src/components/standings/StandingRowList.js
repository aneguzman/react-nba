import React from 'react';
import PropTypes from 'prop-types';
import StandingRow from './StandingRow';

const StandingRowList = props => (
  <tbody>
    {props.standings.map(standing => <StandingRow key={standing.teamId} {...standing} />)}
  </tbody>
);

StandingRowList.propTypes = {
  standings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default StandingRowList;
