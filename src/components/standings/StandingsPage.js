import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'elemental';
import StandingsConferenceTable from './StandingsConferenceTable';
import './standings.css';
import Error from '../common/error';

const WESTERN = 'Western', EASTERN = 'Eastern';

class StandingsPage extends React.Component {
  componentWillMount() {
    const { isLoading, fetchStandingsData } = this.props;
    if (!isLoading) fetchStandingsData();
  }

  render() {
    const { isLoading, eastStandings, westStandings, isError } = this.props;
    return (
      <div>
        <h2>Standings</h2>
        { isLoading && <Spinner size="lg" /> }
        { !isLoading && !isError &&
          <div>
            <StandingsConferenceTable
              conference={WESTERN}
              isLoading={isLoading}
              standings={westStandings}
            />
            <StandingsConferenceTable
              conference={EASTERN}
              isLoading={isLoading}
              standings={eastStandings}
            />
          </div>
        }
        {!isLoading && isError && <Error />}
      </div>
    );
  }
}

StandingsPage.defaultProps = {
  isError: false,
};

StandingsPage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  eastStandings: PropTypes.arrayOf(PropTypes.object).isRequired,
  westStandings: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchStandingsData: PropTypes.func.isRequired,
  isError: PropTypes.bool,
};

export default StandingsPage;
