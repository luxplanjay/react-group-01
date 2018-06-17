import { connect } from 'react-redux';
import NotesList from '../components/notes-list';
import { getVisibleNotes } from '../redux/selectors';
import { deleteNote, updateNote } from '../redux/actions';

const mSTP = state => ({
  notes: getVisibleNotes(state),
});

const mDPT = dispatch => ({
  onDeleteNote: id => dispatch(deleteNote(id)),
  onUpdateNote: note => dispatch(updateNote(note)),
});

export default connect(mSTP, mDPT)(NotesList);
