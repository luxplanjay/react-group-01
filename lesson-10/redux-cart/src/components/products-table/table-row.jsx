import React from 'react';
import Button from '../shared/button';
import { Tr, Td } from './styled';

const TableRow = ({ name, price, quantity, totalPrice }) => (
  <Tr>
    <Td>{name}</Td>
    <Td>{price} USD</Td>
    <Td>
      <Button text="-" />
      <span>{quantity}</span>
      <Button text="+" />
    </Td>
    <Td>{totalPrice}</Td>
  </Tr>
);

export default TableRow;
