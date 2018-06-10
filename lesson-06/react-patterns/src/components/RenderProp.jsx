import React, { Component } from 'react';

export default class RenderProp extends Component {
  constructor(props) {
    super(props);

    this.state = { value: props.startValue };
  }

  increment = () => this.setState(state => ({ value: state.value + 1 }));

  render() {
    return this.props.children(this.state.value, this.increment);
  }
}
