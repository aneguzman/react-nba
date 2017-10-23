import { connect } from 'react-redux';
import ScoresPage from '../components/scores/ScoresPage';
import { fetchScoresData } from '../actions/scoresActions';

const mapStateToProps = ({ scores }) => scores;
const mapDispatchToProps = dispatch => ({
  fetchScoresData: date => fetchScoresData(dispatch, date),
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoresPage);
