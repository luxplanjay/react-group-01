import { combineReducers } from 'redux';
import { FETCH_ARTICLES_SUCCESS } from '../actions/types';

function byId(state = {}, { type, payload }) {
  switch (type) {
    case FETCH_ARTICLES_SUCCESS:
      return payload;

    default:
      return state;
  }
}

function allIds(state = [], { type, payload }) {
  switch (type) {
    case FETCH_ARTICLES_SUCCESS:
      return Object.keys(payload);

    default:
      return state;
  }
}

export default combineReducers({
  byId,
  allIds,
});
