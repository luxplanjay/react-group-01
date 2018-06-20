import { connect } from 'react-redux';
import Products from '../ui/products';
import { addToCart } from 'cart/actions';
import { getAllProducts } from 'redux/selectors';

const mapState = state => ({
  products: getAllProducts(state),
});

const mapDispatch = { addToCart };

export default connect(
  mapState,
  mapDispatch,
)(Products);
