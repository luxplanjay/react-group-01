import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditableInput from './EditableInput';

export default class Note extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    onUpdateNote: PropTypes.func.isRequired,
  };

  state = { isBeingEdited: false };

  onEditStart = () => this.setState({ isBeingEdited: true });

  // TODO: объеденить в 1 метод onEditEnd
  onEditSuccess = () => this.setState({ isBeingEdited: false });

  onEditAbort = () => this.setState({ isBeingEdited: false });

  handleDelete = () => this.props.onDeleteNote(this.props.id);

  handleUpdate = text => {
    this.props.onUpdateNote(this.props.id, text);
    this.onEditSuccess();
  };

  render() {
    const { text } = this.props;
    const { isBeingEdited } = this.state;

    // TODO: фрагмент показать
    return (
      <div>
        {isBeingEdited ? (
          <EditableInput
            text={text}
            onEditSuccess={this.handleUpdate}
            onEditAbort={this.onEditAbort}
          />
        ) : (
          <div>
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.onEditStart}>Edit</button>
            <span>{text}</span>
          </div>
        )}
      </div>
    );
  }
}
