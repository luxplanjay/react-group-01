import React from 'react';
import TableHead from './table-head';
import TableRow from '../../containers/table-row';
import { Table } from './styled';

const theadCells = ['item', 'price', 'quantity', 'total price'];

const ProductsTable = ({ products }) => (
  <Table>
    <TableHead cells={theadCells} />
    <tbody>
      {products.map(id => <TableRow key={id} id={id} />)}
    </tbody>
  </Table>
);

export default ProductsTable;
