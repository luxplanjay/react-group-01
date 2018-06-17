import { combineReducers } from 'redux';
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
} from '../actions/types';

function dataReducer(state = [], { type, payload }) {
  switch (type) {
    case FETCH_NOTES_SUCCESS:
      return payload;

    case ADD_NOTE_SUCCESS:
      return [...state, payload];

    case DELETE_NOTE_SUCCESS:
      return state.filter(note => note.id !== payload);

    case UPDATE_NOTE_SUCCESS:
      return state.map(note => (note.id === payload.id ? payload : note));

    default:
      return state;
  }
}

function loadingReducer(state = false, { type }) {
  switch (type) {
    case FETCH_NOTES_REQUEST:
    case ADD_NOTE_REQUEST:
    case DELETE_NOTE_REQUEST:
    case UPDATE_NOTE_REQUEST:
      return true;

    case FETCH_NOTES_SUCCESS:
    case ADD_NOTE_SUCCESS:
    case DELETE_NOTE_SUCCESS:
    case UPDATE_NOTE_SUCCESS:
    case FETCH_NOTES_FAIL:
    case ADD_NOTE_FAIL:
    case DELETE_NOTE_FAIL:
    case UPDATE_NOTE_FAIL:
      return false;

    default:
      return state;
  }
}

function errorReducer(state = null, { type, payload }) {
  switch (type) {
    case FETCH_NOTES_SUCCESS:
    case ADD_NOTE_SUCCESS:
    case DELETE_NOTE_SUCCESS:
    case UPDATE_NOTE_SUCCESS:
      return null;

    case FETCH_NOTES_FAIL:
    case ADD_NOTE_FAIL:
    case DELETE_NOTE_FAIL:
    case UPDATE_NOTE_FAIL:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  data: dataReducer,
  loading: loadingReducer,
  error: errorReducer,
});
