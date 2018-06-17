import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import EditableInput from '../shared/editable-input';
import Button from '../shared/button';
import styles from './styles.css';

const getBorderColor = priority => {
  switch (priority) {
    case 'low':
      return '#4CAF50';
    case 'normal':
      return '#2196F3';
    case 'high':
      return '#F44336';
    default:
      return 'white';
  }
};

class Note extends Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    priority: PropTypes.oneOf(['low', 'normal', 'high']).isRequired,
    onDeleteNote: PropTypes.func.isRequired,
    onUpdateNote: PropTypes.func.isRequired,
  };

  state = { isBeingEdited: false };

  onEditStart = () => this.setState({ isBeingEdited: true });

  onEditEnd = () => this.setState({ isBeingEdited: false });

  handleDelete = () => this.props.onDeleteNote(this.props.id);

  handleUpdate = text => {
    this.props.onUpdateNote({
      id: this.props.id,
      text,
      priority: this.props.priority,
    });

    this.onEditEnd();
  };

  render() {
    const { text, priority } = this.props;
    const { isBeingEdited } = this.state;

    return (
      <Fragment>
        {isBeingEdited ? (
          <EditableInput
            text={text}
            onEditSuccess={this.handleUpdate}
            onEditCancel={this.onEditEnd}
          />
        ) : (
          <div
            className={styles.note}
            style={{ borderTop: `4px solid ${getBorderColor(priority)}` }}>
            <p className={styles.text}>{text}</p>
            <p className={styles.priority}>Priority: {priority}</p>

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

export default Note;
