import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import api from './middlewares/api';
import rootReducer from './reducers';

const enhancer = composeWithDevTools(applyMiddleware(thunk, api));

const store = createStore(rootReducer, enhancer);

export default store;
