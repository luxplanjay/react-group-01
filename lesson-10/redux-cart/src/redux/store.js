import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const enhancer = composeWithDevTools();

export default createStore(rootReducer, enhancer);
