import { connect } from 'react-redux';
import PrioritySelector from '../components/priority-selector';
import { changePriorityFilter } from '../redux/actions';
import { getPriorityFilter } from '../redux/selectors';

const mapState = state => ({
  currentFilter: getPriorityFilter(state),
});

const mapDispatch = { changePriorityFilter };

export default connect(mapState, mapDispatch)(PrioritySelector);
