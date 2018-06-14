import axios from 'axios';
import {
  FETCH_NOTES_START,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAIL,
  ADD_NOTE_SUCCESS,
  DELETE_NOTE_SUCCESS,
  UPDATE_NOTE_SUCCESS,
} from './types';

const fetchNotesStart = () => ({
  type: FETCH_NOTES_START,
});

const fetchNotesSuccess = notes => ({
  type: FETCH_NOTES_SUCCESS,
  payload: notes,
});

const fetchNotesFail = error => ({
  type: FETCH_NOTES_FAIL,
  payload: error,
});

export const fetchNotes = () => dispatch => {
  dispatch(fetchNotesStart());

  axios
    .get('/api/notes')
    .then(({ data }) => dispatch(fetchNotesSuccess(data)))
    .catch(err => dispatch(fetchNotesFail(err.response)));
};

const addNoteSuccess = note => ({
  type: ADD_NOTE_SUCCESS,
  payload: note,
});

export const addNote = text => dispatch => {
  const note = { text, completed: false };

  axios
    .post('/api/notes', note)
    .then(({ data }) => dispatch(addNoteSuccess(data)));
};

const deleteNoteSuccess = id => ({
  type: DELETE_NOTE_SUCCESS,
  payload: id,
});

export const deleteNote = id => dispatch => {
  axios.delete(`/api/notes/${id}`).then(() => dispatch(deleteNoteSuccess(id)));
};

const updateNoteSuccess = note => ({
  type: UPDATE_NOTE_SUCCESS,
  payload: note,
});

export const updateNote = note => dispatch => {
  axios
    .put(`/api/notes/${note.id}`, note)
    .then(({ data }) => dispatch(updateNoteSuccess(data)));
};
