import React, { Component } from 'react';

const withLogger = WrappedComponent => {
  return class WithLogger extends Component {
    componentDidMount() {
      console.group(`Logger ouput @${WrappedComponent.name}`);
      console.log(this.props);
      console.groupEnd();
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLogger;
