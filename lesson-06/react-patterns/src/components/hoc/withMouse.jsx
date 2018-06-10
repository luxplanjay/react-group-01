import React, { Component } from 'react';

const withMouse = WrappedComponent =>
  class WithMouse extends Component {
    state = { x: 0, y: 0 };

    handleMouseMove = e => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };

    render() {
      return (
        <div onMouseMove={this.handleMouseMove}>
          <WrappedComponent coords={this.state} {...this.props} />
        </div>
      );
    }
  };
export default withMouse;
