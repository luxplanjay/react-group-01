import React from 'react';
import styled from 'styled-components';
import Product from './product';
import Panel from 'shared-ui/panel';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Products = ({ products, addToCart }) => (
  <Container>
    {products.map(product => (
      <div key={product.id} style={{ margin: 8 }}>
        <Panel>
          <Product addToCart={() => addToCart(product.id)} {...product} />
        </Panel>
      </div>
    ))}
  </Container>
);

export default Products;
