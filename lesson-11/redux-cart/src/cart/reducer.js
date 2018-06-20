import { combineReducers } from 'redux';

function byId(state = {}, { type, payload }) {
  switch (type) {
    case 'ADD_TO_CART': {
      const id = payload;
      const inCart = state[id];

      if (inCart) {
        return {
          ...state,
          [id]: {
            ...state[id],
            quantity: state[id].quantity + 1,
          },
        };
      }

      return {
        ...state,
        [id]: { id, quantity: 1 },
      };
    }

    default:
      return state;
  }
}

function allIds(state = [], { type, payload }) {
  switch (type) {
    case 'ADD_TO_CART': {
      const id = payload;

      if (!state.includes(id)) {
        return [...state, id];
      }

      return state;
    }

    default:
      return state;
  }
}

export default combineReducers({ byId, allIds });
