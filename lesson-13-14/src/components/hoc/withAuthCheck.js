import React, { Component } from 'react';
import { connect } from 'react-redux';

const withAuthCheck = WrappedComponent => {
  class WithAuthCheck extends Component {
    componentDidMount() {
      this.checkAuthentication();
    }

    componentDidUpdate() {
      this.checkAuthentication();
    }

    checkAuthentication = () => {
      if (this.props.authenticated) {
        const { from } = this.props.location.state || {
          from: { pathname: '/' },
        };

        this.props.history.replace(from);
      }
    };

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.session.authenticated,
  });

  return connect(
    mapStateToProps,
    null,
  )(WithAuthCheck);
};

export default withAuthCheck;
