import { connect } from 'react-redux';
import StandingsPage from '../components/standings/StandingsPage';
import { fetchStandingsData } from '../actions/standingsActions';

const mapStateToProps = ({ standings }) => standings;
const mapDispatchToProps = dispatch => ({
  fetchStandingsData: () => fetchStandingsData(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StandingsPage);
