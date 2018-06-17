import React from 'react';
import ProductsTable from './products-table';
import TotalAmount from './total-amount';

const Cart = ({ products }) => (
  <div>
    <ProductsTable products={products} />
    <TotalAmount value={100} />
  </div>
);

export default Cart;
