import axios from 'axios';

/**
 * Fetches all notes from an api
 */
export const fetchAllNotes = () =>
  axios
    .get('/api/notes')
    .then(
      ({ data, status }) =>
        status === 200 ? data : { error: 'Error while fetching' },
    )
    .catch(err => console.log(`Error while fetching: ${err}`));

/**
 * Adds new note
 *
 * @param {Object} note - new note
 */
export const addNote = note =>
  axios
    .post('/api/notes', note)
    .then(
      ({ data, status }) =>
        status === 201 ? data : { error: 'Error while adding' },
    )
    .catch(err => console.log(`Error while adding: ${err}`));

/**
 * Removes a note by id
 *
 * @param {Number} id - note id
 */
export const deleteNote = id =>
  axios
    .delete(`/api/notes/${id}`)
    .then(({ status }) => status === 200)
    .catch(err => console.log(`Error while deleting: ${err}`));

/**
 * Updates note
 *
 * @param {Object} note - note to be updated
 */
export const updateNote = note =>
  axios
    .put(`/api/notes/${note.id}`, note)
    .then(
      ({ data, status }) =>
        status === 200 ? data : { error: 'Error while updating' },
    )
    .catch(err => console.log(`Error while deleting: ${err}`));
