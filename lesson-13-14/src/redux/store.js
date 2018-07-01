import { applyMiddleware, createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk';
import sessionMiddleware from './middleware/session';
import articles from './reducers/articles';
import session from './reducers/session';

export const history = createHistory({
  basename: '/react-group-01/lesson-13-14/build',
});

const rootReducer = combineReducers({
  session,
  articles,
  router: routerReducer,
});

const middleware = [
  routerMiddleware(history),
  thunkMiddleware,
  sessionMiddleware,
];

const enhancer = composeWithDevTools(applyMiddleware(...middleware));

let sessionState = null;

try {
  sessionState = JSON.parse(localStorage.getItem('session'));
} catch (err) {
  console.log(err);
}

const persistedState = sessionState ? { session: sessionState } : {};

const store = createStore(rootReducer, persistedState, enhancer);

export default store;
