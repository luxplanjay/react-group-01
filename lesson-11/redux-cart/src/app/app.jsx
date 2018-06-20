import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from 'products/containers/products';
import Cart from 'cart/containers/cart';
import Panel from 'shared-ui/panel';
import generateProducts from '../fakeData';
import { getProducts } from '../products/actions';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class AppContainer extends Component {
  componentDidMount() {
    this.props.getProducts(generateProducts(3));
  }

  render() {
    return (
      <Container>
        <Products />

        <Panel>
          <Cart />
        </Panel>
      </Container>
    );
  }
}

const mapDispatch = { getProducts };

export default connect(
  null,
  mapDispatch,
)(AppContainer);
