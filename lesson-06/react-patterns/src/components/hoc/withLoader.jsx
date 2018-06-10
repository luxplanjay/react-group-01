import React, { Component } from 'react';

const withLoader = WrappedComponent =>
  class WithLoader extends Component {
    render() {
      const { isLoading, ...rest } = this.props;

      return isLoading ? <div>Loading...</div> : <WrappedComponent {...rest} />;
    }
  };

export default withLoader;
