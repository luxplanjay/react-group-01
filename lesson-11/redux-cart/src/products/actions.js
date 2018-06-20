import { schema, normalize } from 'normalizr';

const productSchema = new schema.Entity('products');

export const getProducts = products => ({
  type: 'GET_PRODUCTS_SUCCESS',
  payload: normalize(products, [productSchema]).entities,
});
