import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const ToggleContext = createContext({ on: false, toggle: () => null });

export const ToggleConsumer = ToggleContext.Consumer;

export default class Toggle extends Component {
  state = { on: false };

  toggle = () => this.setState(state => ({ on: !state.on }));

  render() {
    return (
      <ToggleContext.Provider
        value={{ on: this.state.on, toggle: this.toggle }}>
        {this.props.children({ on: this.state.on, toggle: this.toggle })}
      </ToggleContext.Provider>
    );
  }
}
