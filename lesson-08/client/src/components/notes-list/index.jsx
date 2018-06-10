import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Masonry from 'react-masonry-component';
import Note from '../note';
import { getVisibleNotes } from '../../utils/selectors';
import styles from './styles.css';

const NotesList = ({ notes }) => (
  <Masonry className={styles.list} elementType={'ul'}>
    {notes.map(note => (
      <li key={note.id} className={styles.item}>
        <Note {...note} />
      </li>
    ))}
  </Masonry>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

const mSTP = state => ({
  notes: getVisibleNotes(state.notes, state.filter),
});

export default connect(mSTP)(NotesList);
