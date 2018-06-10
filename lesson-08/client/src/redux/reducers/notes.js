import { ADD_NOTE, DELETE_NOTE, UPDATE_NOTE } from '../actions/types';

const initialState = [];

export default function notesReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_NOTE:
      return [...state, payload];

    case DELETE_NOTE:
      return state.filter(note => note.id !== payload);

    case UPDATE_NOTE:
      return state.map(
        note => (note.id === payload.id
          ? { ...note, text: payload.text }
          : note),
      );

    default:
      return state;
  }
}
