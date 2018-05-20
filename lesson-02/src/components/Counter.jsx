import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import CounterText from './CounterText';

export default class Counter extends Component {
  static propTypes = {
    startValue: PropTypes.number,
    incrementBy: PropTypes.number,
    decrementBy: PropTypes.number,
  };

  static defaultProps = {
    startValue: 0,
    incrementBy: 1,
    decrementBy: 1,
  };

  state = {
    counterValue: this.props.startValue,
  };

  handleIncrementClick = () => {
    this.setState(prevState => ({
      counterValue: prevState.counterValue + this.props.incrementBy,
    }));
  };

  handleDecrementClick = () => {
    this.setState(prevState => ({
      counterValue: prevState.counterValue - this.props.decrementBy,
    }));
  };

  render() {
    const { counterValue } = this.state;

    return (
      <div>
        <CounterText value={counterValue} />
        <Button text="Increment" onClick={this.handleIncrementClick} />
        <Button text="Decrement" onClick={this.handleDecrementClick} />
      </div>
    );
  }
}
