import React from 'react';
import Products from '../containers/products';
import Cart from '../containers/cart';
import Panel from './shared/panel';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => (
  <Container>
    <Products />

    <Panel>
      <Cart />
    </Panel>
  </Container>
);

export default App;
