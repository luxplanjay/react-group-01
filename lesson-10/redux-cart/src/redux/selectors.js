import { createSelector } from 'reselect';

export const getAllProducts = state => state.products;

const getCartProductsIds = state => state.cart.map(el => el.id);

export const getCartProducts = createSelector(
  [getCartProductsIds, getAllProducts],
  (productsIds, allProducts) =>
    allProducts.filter(product => productsIds.includes(product.id)),
);

// const getProductPriceById = (state, id) => {};

// const getProductQuantityById = (state, id) => {};

// export const getTotalPrice = createSelector(
//   [getProductPriceById, getProductQuantityById],
//   (price, quantity) => price * quantity,
// );
