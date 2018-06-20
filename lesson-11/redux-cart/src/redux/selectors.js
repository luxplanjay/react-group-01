import { createSelector } from 'reselect';

// Products
const getAllProductsIds = state => state.products.allIds;

const getAllProductsById = state => state.products.byId;

const getProductById = createSelector(
  [(state, id) => id, getAllProductsById],
  (id, products) => products[id],
);

const getProductPrice = createSelector([getProductById], ({ price }) => price);

export const getAllProducts = createSelector(
  [getAllProductsIds, getAllProductsById],
  (ids, products) => ids.map(id => products[id]),
);

// Cart
export const getCartProductsIds = state => state.cart.allIds;

const getCartProductsById = state => state.cart.byId;

const getCartProductById = createSelector(
  [(state, id) => id, getCartProductsById],
  (id, products) => products[id],
);

const getProductQuantity = createSelector(
  [getCartProductById],
  ({ quantity }) => quantity,
);

const getProductTotalPrice = createSelector(
  [getProductPrice, getProductQuantity],
  (price, quantity) => price * quantity,
);

export const makeGetCartProduct = () =>
  createSelector(
    [getProductById, getProductQuantity, getProductTotalPrice],
    (product, quantity, totalPrice) => ({
      ...product,
      quantity,
      totalPrice,
    }),
  );

export const getTotalAmount = createSelector(
  [state => state, getCartProductsIds],
  (state, ids) =>
    ids.reduce((total, id) => {
      const productPrice = getProductTotalPrice(state, id);

      return total + productPrice;
    }, 0),
);
