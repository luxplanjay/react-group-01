import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditableInput from './EditableInput';

export default class Todo extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
    onUpdateTodo: PropTypes.func.isRequired,
  };

  state = { isBeingEdited: false };

  handleDelete = () => this.props.onDeleteTodo(this.props.id);

  onEditStart = () => this.setState({ isBeingEdited: true });

  onEditSucces = () => this.setState({ isBeingEdited: false });

  onEditAbort = () => this.setState({ isBeingEdited: false });

  handleUpdate = text => {
    this.props.onUpdateTodo(this.props.id, text);
    this.onEditSucces();
  };

  render() {
    const { title } = this.props;
    const { isBeingEdited } = this.state;

    return (
      <div>
        <button onClick={this.handleDelete}>Delete</button>

        {isBeingEdited ? (
          <EditableInput
            title={title}
            onEditSuccess={this.handleUpdate}
            onEditAbort={this.onEditAbort}
          />
        ) : (
          <span>
            <button onClick={this.onEditStart}>Edit</button>
            <span>{title}</span>
          </span>
        )}
      </div>
    );
  }
}
