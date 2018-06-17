import { connect } from 'react-redux';
import Products from '../components/products';
import { getAllProducts } from '../redux/selectors';
import { addToCart } from '../redux/actions';

const mapState = state => ({
  products: getAllProducts(state),
});

const mapDispatch = { addToCart };

export default connect(
  mapState,
  mapDispatch,
)(Products);
