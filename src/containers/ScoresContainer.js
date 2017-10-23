import { connect } from 'react-redux';
import ScoresPage from '../components/scores/scoresPage';
import { fetchScoresData } from '../actions/scoresActions';

const mapStateToProps = ({ scores }) => scores;
const mapDispatchToProps = dispatch => ({
    fetchScoresData: date => fetchScoresData(dispatch, date)
});

export default connect(mapStateToProps, mapDispatchToProps)(ScoresPage);