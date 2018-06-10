import { v4 } from 'uuid';
import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from './types';

export const addNote = text => ({
  type: ADD_NOTE,
  payload: { id: v4(), text, completed: false },
});

export const deleteNote = id => ({
  type: DELETE_NOTE,
  payload: id,
});

export const updateNote = ({ id, text }) => ({
  type: UPDATE_NOTE,
  payload: { id, text },
});
