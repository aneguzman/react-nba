import { connect } from 'react-redux';
import { fetchNewsData } from '../actions/newsActions';
import NewsFeedPage from '../components/news/NewsFeedPage';

const mapStateToProps = ({ news }) => news;
const mapDispatchToProps = dispatch => ({
  fetchNewsData: page => fetchNewsData(dispatch, page),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedPage);
