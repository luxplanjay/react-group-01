import { connect } from 'react-redux';
import Cart from '../components/cart';
import { getCartProducts } from '../redux/selectors';

const mapState = state => ({
  products: getCartProducts(state),
});

// const mapDispatch = dispatch => ({});

export default connect(
  mapState,
  null,
)(Cart);
