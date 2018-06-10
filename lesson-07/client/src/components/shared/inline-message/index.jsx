import React from 'react';
import PropTypes from 'prop-types';

const InlineMessage = ({ text }) => <p>{text}</p>;

InlineMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default InlineMessage;
