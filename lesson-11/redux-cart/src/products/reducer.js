import { combineReducers } from 'redux';

function byId(state = {}, { type, payload }) {
  switch (type) {
    case 'GET_PRODUCTS_SUCCESS':
      return payload.products;

    default:
      return state;
  }
}

function allIds(state = [], { type, payload }) {
  switch (type) {
    case 'GET_PRODUCTS_SUCCESS':
      return Object.keys(payload.products);

    default:
      return state;
  }
}

export default combineReducers({ byId, allIds });
