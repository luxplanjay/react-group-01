import React from 'react';
import { Tr, Th } from './styled';

const TableHead = ({ cells }) => (
  <thead>
    <Tr>{cells.map(cell => <Th key={cell}>{cell}</Th>)}</Tr>
  </thead>
);

export default TableHead;
