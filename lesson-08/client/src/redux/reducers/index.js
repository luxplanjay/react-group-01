/* eslint-disable */
import { combineReducers } from 'redux';
import notesReducer from './notes';
import filterReducer from './filter';

const rootReducer = combineReducers({
  notes: notesReducer,
  filter: filterReducer,
});

export default rootReducer;


