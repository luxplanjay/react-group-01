import React, { Component } from 'react';

const passProps = props => WrappedComponent =>
  class PassProps extends Component {
    render() {
      return <WrappedComponent {...this.props} {...props} />;
    }
  };

export default passProps;
