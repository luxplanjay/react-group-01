import React from 'react';
import Product from './product';
import Panel from './shared/panel';

const Products = ({ products, addToCart }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    {products.map(product => (
      <div key={product.id} style={{ margin: 8 }}>
        <Panel>
          <Product addToCart={() => addToCart(product.id)} {...product} />
        </Panel>
      </div>
    ))}
  </div>
);

export default Products;
