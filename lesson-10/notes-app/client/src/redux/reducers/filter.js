import { combineReducers } from 'redux';
import {
  CHANGE_CONTENT_FILTER,
  CHANGE_PRIORITY_FILTER,
} from '../actions/types';

function contentReducer(state = '', { type, payload }) {
  switch (type) {
    case CHANGE_CONTENT_FILTER:
      return payload;

    default:
      return state;
  }
}

function priorityReducer(state = 'all', { type, payload }) {
  switch (type) {
    case CHANGE_PRIORITY_FILTER:
      return payload;

    default:
      return state;
  }
}

export default combineReducers({
  content: contentReducer,
  priority: priorityReducer,
});
