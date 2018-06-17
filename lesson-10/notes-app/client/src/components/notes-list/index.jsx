import React from 'react';
import PropTypes from 'prop-types';
import Masonry from 'react-masonry-component';
import Note from '../note';
import styles from './styles.css';

const NotesList = ({ notes, ...props }) => (
  <Masonry className={styles.list} elementType={'ul'}>
    {notes.map(note => (
      <li key={note.id} className={styles.item}>
        <Note {...note} {...props} />
      </li>
    ))}
  </Masonry>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default NotesList;
