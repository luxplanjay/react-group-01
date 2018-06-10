import React, { Component } from 'react';

const withToggle = WrappedComponent =>
  class WithToggle extends Component {
    state = { visible: false };

    toggle = () => this.setState(state => ({ visible: !state.visible }));

    render() {
      const { visible } = this.state;

      return (
        <div>
          <button onClick={this.toggle}>toggle</button>
          {visible && <WrappedComponent {...this.props} />}
        </div>
      );
    }
  };

export default withToggle;
