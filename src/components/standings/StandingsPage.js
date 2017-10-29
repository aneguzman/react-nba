import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'elemental';
import StandingsConferenceTable from './StandingsConferenceTable';

import './standings.css';

class StandingsPage extends React.Component {
  componentWillMount() {
    const { isLoading, fetchStandingsData } = this.props;
    if (!isLoading) fetchStandingsData();
  }

  render() {
    const { isLoading, eastStandings, westStandings } = this.props;
    return (
      <div>
        <h2>Standings</h2>
        { isLoading && <Spinner size="lg" /> }
        { !isLoading &&
          <StandingsConferenceTable
            conference="Eastern"
            isLoading={isLoading}
            standings={eastStandings}
          />
        }
        { !isLoading &&
          <StandingsConferenceTable
            conference="Western"
            isLoading={isLoading}
            standings={westStandings}
          />
        }
      </div>
    );
  }
}

StandingsPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  eastStandings: PropTypes.arrayOf(PropTypes.object).isRequired,
  westStandings: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchStandingsData: PropTypes.func.isRequired,
};
export default StandingsPage;
