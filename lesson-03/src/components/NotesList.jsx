import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';
import styles from './NotesList.css';

const NotesList = ({ notes, ...props }) => (
  <ul className={styles.list}>
    {notes.map(note => (
      <li key={note.id} className={styles.item}>
        <Note {...note} {...props} />
      </li>
    ))}
  </ul>
);

NotesList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default NotesList;
