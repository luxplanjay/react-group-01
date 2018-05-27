/* eslint-disable */
import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import EditableInput from './EditableInput';
import Button from './shared/Button';
import styles from './Note.css';

export default class Note extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    onUpdateNote: PropTypes.func.isRequired,
  };

  state = { isBeingEdited: false };

  // static getDerivedStateFromProps() {
  //   console.log('[NOTE]: getDerivedStateFromProps');
  //   return null;
  // }

  // componentDidMount() {
  //   console.log('[NOTE]: componentDidMount');
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log('[NOTE]: shouldComponentUpdate');

  //   const propsChanged = nextProps.text !== this.props.text;
  //   const stateChanged = this.state.isBeingEdited !== nextState.isBeingEdited;

  //   return propsChanged || stateChanged;
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log('[NOTE]: getSnapshotBeforeUpdate');

  //   return {
  //     scrollPos: 10,
  //   };
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('[NOTE]: componentDidUpdate');
  // }

  // componentWillUnmount() {
  //   console.log('[NOTE]: componentWillUnmount');
  // }

  onEditStart = () => this.setState({ isBeingEdited: true });

  onEditEnd = () => this.setState({ isBeingEdited: false });

  handleDelete = () => this.props.onDeleteNote(this.props.id);

  handleUpdate = text => {
    this.props.onUpdateNote({ id: this.props.id, text });
    this.onEditEnd();
  };

  render() {
    // console.log('[NOTE] render');

    const { text } = this.props;
    const { isBeingEdited } = this.state;

    return (
      <Fragment>
        {isBeingEdited ? (
          <EditableInput
            text={text}
            onEditSuccess={this.handleUpdate}
            onEditAbort={this.onEditEnd}
          />
        ) : (
          <div className={styles.note}>
            <p className={styles.text}>{text}</p>

            <div className={styles.actions}>
              <Button onClick={this.onEditStart} text="Edit" />
              <Button onClick={this.handleDelete} text="Delete" />
            </div>
          </div>
        )}
      </Fragment>
    );
  }
}
