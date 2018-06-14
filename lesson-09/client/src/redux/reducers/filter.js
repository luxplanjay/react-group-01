import { CHANGE_FILTER } from '../actions/types';

const initialState = '';

export default function filterReducer(state = initialState, { type, payload }) {
  switch (type) {
    case CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
}
