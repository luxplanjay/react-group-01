import React from 'react';
import ProductsTable from './products-table';
import TotalAmount from '../containers/total-amount';

const Cart = ({ products }) => (
  <div>
    <ProductsTable products={products} />
    <TotalAmount />
  </div>
);

export default Cart;
