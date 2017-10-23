import { connect } from 'react-redux';
import NewsFeedPage from '../components/news/newsFeedPage';
import { fetchNewsData } from '../actions/newsActions';

const mapStateToProps = ({ news }) => news;
const mapDispatchToProps = dispatch => ({ 
    fetchNewsData: fetchNewsData(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedPage);