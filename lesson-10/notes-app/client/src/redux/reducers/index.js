import { combineReducers } from 'redux';
import notesReducer from './notes';
import filterReducer from './filter';
import modalReducer from './modal';

const rootReducer = combineReducers({
  notes: notesReducer,
  filter: filterReducer,
  isModalOpen: modalReducer,
});

export default rootReducer;
