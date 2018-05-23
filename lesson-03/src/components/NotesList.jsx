import React from 'react';
import PropTypes from 'prop-types';
import Note from './Note';

const NotesList = ({ notes, ...props }) => (
  <ul>
    {notes.map(note => (
      <li key={note.id}>
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
