import React from 'react';
import PropTypes from 'prop-types';

const CounterText = ({ value }) => <h2>{value}</h2>;

CounterText.propTypes = {
  value: PropTypes.number.isRequired,
};

export default CounterText;
