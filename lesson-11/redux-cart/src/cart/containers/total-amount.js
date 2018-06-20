import { connect } from 'react-redux';
import TotalAmount from '../ui/total-amount';
import { getTotalAmount } from 'redux/selectors';

const mapState = state => ({
  value: getTotalAmount(state),
});

export default connect(
  mapState,
  null,
)(TotalAmount);
