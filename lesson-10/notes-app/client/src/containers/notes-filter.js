import { connect } from 'react-redux';
import NotesFilter from '../components/notes-filter';
import { changeContentFilter } from '../redux/actions';
import { getContentFilter } from '../redux/selectors';

const mSTP = state => ({
  currentFilter: getContentFilter(state),
});

const mDTP = dispatch => ({
  onChange: filter => dispatch(changeContentFilter(filter)),
});

export default connect(mSTP, mDTP)(NotesFilter);
