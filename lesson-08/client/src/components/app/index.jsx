/* eslint-disable */
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import AppBar from '../app-bar';
import NoteEditorModal from '../note-editor-modal';
import NotesList from '../notes-list';
import NotesFilter from '../notes-filter';
import Button from '../shared/button';
import Container from '../shared/container';
import styles from './styles.css';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  handleOpenModal = () => this.setState({ isModalOpen: true });

  handleCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;

    return (
      <div className={styles.page}>
        <AppBar>
          <Button onClick={this.handleOpenModal} text="Create Note" />
          <NotesFilter />
        </AppBar>

        <Container>
          <NotesList />

          <NoteEditorModal
            isOpen={isModalOpen}
            onClose={this.handleCloseModal}
          />
        </Container>
      </div>
    );
  }
}

export default hot(module)(App);
