import React from 'react';
import TableHead from './table-head';
import TableRow from './table-row';
import { Table } from './styled';

const theadCells = ['item', 'price', 'quantity', 'total price'];

const ProductsTable = ({ products }) => (
  <Table>
    <TableHead cells={theadCells} />
    <tbody>
      {products.map(product => <TableRow key={product.id} {...product} />)}
    </tbody>
  </Table>
);

export default ProductsTable;
