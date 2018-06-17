import axios from 'axios';
import {
  FETCH_NOTES_REQUEST,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAIL,
  ADD_NOTE_REQUEST,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAIL,
  DELETE_NOTE_REQUEST,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAIL,
  UPDATE_NOTE_REQUEST,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAIL,
} from './types';

/**
 * Fetch all notes
 */
const fetchNotesRequest = () => ({
  type: FETCH_NOTES_REQUEST,
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
  dispatch(fetchNotesRequest());

  return axios
    .get('/api/notes')
    .then(({ data }) => dispatch(fetchNotesSuccess(data)))
    .catch(err => dispatch(fetchNotesFail(err.response)));
};

/**
 * Add new note
 */
const addNoteRequest = () => ({
  type: ADD_NOTE_REQUEST,
});

const addNoteSuccess = note => ({
  type: ADD_NOTE_SUCCESS,
  payload: note,
});

const addNoteFail = error => ({
  type: ADD_NOTE_FAIL,
  payload: error,
});

export const addNote = note => dispatch => {
  dispatch(addNoteRequest());

  return axios
    .post('/api/notes', note)
    .then(({ data }) => dispatch(addNoteSuccess(data)))
    .catch(err => dispatch(addNoteFail(err)));
};

/**
 * Delete note
 */
const deleteNoteRequest = () => ({
  type: DELETE_NOTE_REQUEST,
});

const deleteNoteSuccess = id => ({
  type: DELETE_NOTE_SUCCESS,
  payload: id,
});

const deleteNoteFail = error => ({
  type: DELETE_NOTE_FAIL,
  payload: error,
});

export const deleteNote = id => dispatch => {
  dispatch(deleteNoteRequest());

  return axios
    .delete(`/api/notes/${id}`)
    .then(() => dispatch(deleteNoteSuccess(id)))
    .catch(err => dispatch(deleteNoteFail(err)));
};

/**
 * Delete note
 */
const updateNoteRequest = () => ({
  type: UPDATE_NOTE_REQUEST,
});

const updateNoteSuccess = note => ({
  type: UPDATE_NOTE_SUCCESS,
  payload: note,
});

const updateNoteFail = error => ({
  type: UPDATE_NOTE_FAIL,
  payload: error,
});

export const updateNote = note => dispatch => {
  dispatch(updateNoteRequest());

  return axios
    .put(`/api/notes/${note.id}`, note)
    .then(({ data }) => dispatch(updateNoteSuccess(data)))
    .catch(err => dispatch(updateNoteFail(err)));
};
