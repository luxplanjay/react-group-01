import axios from 'axios';

/**
 * Handles promise errors by loggin them to console
 *
 * @param {Object} error
 */
const handlePromiseError = error => console.log(`Error: ${error}`);

/**
 * Handles api response
 *
 * @param {object} response - api resonse object
 * @param {Number} successCode - successful api response code
 * @param {String} errorMessage
 */
const processApiResponse = ({ response, successCode, errorMessage }) => ({
  data: response.data,
  error: response.status === successCode ? null : errorMessage,
});

/**
 * Fetches all notes from an api
 *
 * @returns {Promise} - Promise object represents operation result
 */
export const fetchAllNotes = () =>
  axios
    .get('/api/notes')
    .then(response =>
      processApiResponse({
        response,
        successCode: 200,
        errorMessage: 'Error while fetching',
      }),
    )
    .catch(handlePromiseError);

/**
 * Adds new note
 *
 * @param {Object} note - new note
 * @returns {Promise} - Promise object represents operation result
 */
export const addNote = note =>
  axios
    .post('/api/notes', note)
    .then(response =>
      processApiResponse({
        response,
        successCode: 201,
        errorMessage: 'Error while adding',
      }),
    )
    .catch(handlePromiseError);

/**
 * Removes a note by id
 *
 * @param {Number} id - note id
 * @returns {Promise} - Promise object represents operation result
 */
export const deleteNote = id =>
  axios
    .delete(`/api/notes/${id}`)
    .then(response =>
      processApiResponse({
        response,
        successCode: 200,
        errorMessage: 'Error while deleting',
      }),
    )
    .catch(handlePromiseError);

/**
 * Updates note
 *
 * @param {Object} note - note to be updated
 * @returns {Promise} - Promise object represents operation result
 */
export const updateNote = note =>
  axios
    .put(`/api/notes/${note.id}`, note)
    .then(response =>
      processApiResponse({
        response,
        successCode: 200,
        errorMessage: 'Error while updating',
      }),
    )
    .catch(handlePromiseError);
