import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import cart from '../cart/reducer';
import products from '../products/reducer';

const rootReducer = combineReducers({ cart, products });
const enhancer = composeWithDevTools();

export default createStore(rootReducer, enhancer);
