const initialState = [];

export default function products(state = initialState, { type, payload }) {
  switch (type) {
    case 'GET_PRODUCTS_SUCCESS':
      return payload;

    default:
      return state;
  }
}
