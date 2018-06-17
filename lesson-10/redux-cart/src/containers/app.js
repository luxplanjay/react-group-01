import React, { Component } from 'react';
import { connect } from 'react-redux';
import App from '../components/app';
import generateProducts from '../fakeData';
import { getProducts } from '../redux/actions';

const products = generateProducts(4);

class AppContainer extends Component {
  componentDidMount() {
    this.props.getProducts(products);
  }

  render() {
    return <App {...this.props} />;
  }
}

const mapDispatch = { getProducts };

export default connect(
  null,
  mapDispatch,
)(AppContainer);
