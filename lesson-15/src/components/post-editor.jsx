import React, { Component } from 'react';

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column',
    padding: 8,
  },
  actions: {
    display: 'flex',
    justifyContent: 'center',
  },
};

export default class PostEditor extends Component {
  render() {
    const { onCancel } = this.props;

    return (
      <form style={styles.form}>
        <input type="text" name="title" placeholder="Title..." />
        <textarea name="message" cols="30" rows="8" placeholder="Message..." />
        <div style={styles.actions}>
          <button type="submit">Post</button>
          <button onClick={onCancel}>Cancel</button>
        </div>
      </form>
    );
  }
}
