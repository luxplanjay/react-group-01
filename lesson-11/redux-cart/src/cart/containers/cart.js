import { connect } from 'react-redux';
import Cart from '../ui/cart';
import { getCartProductsIds } from 'redux/selectors';

const mapState = state => ({
  products: getCartProductsIds(state),
});

export default connect(
  mapState,
  null,
)(Cart);
