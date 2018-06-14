/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '../app-bar';
import NoteEditorModal from '../note-editor-modal';
import NotesList from '../notes-list';
import Loader from '../shared/loader';
import NotesFilter from '../notes-filter';
import Button from '../shared/button';
import Container from '../shared/container';
import { fetchNotes } from '../../redux/actions/notes';
import styles from './styles.css';

class App extends Component {
  state = {
    isModalOpen: false,
  };

  componentDidMount() {
    this.props.fetchNotes();
  }

  handleOpenModal = () => this.setState({ isModalOpen: true });

  handleCloseModal = () => this.setState({ isModalOpen: false });

  render() {
    const { isModalOpen } = this.state;
    const { isLoading } = this.props;

    return (
      <div className={styles.page}>
        <AppBar>
          <Button onClick={this.handleOpenModal} text="Create Note" />
          <NotesFilter />
        </AppBar>

        <Container>
          {isLoading ? <Loader /> : <NotesList />}

          <NoteEditorModal
            isOpen={isModalOpen}
            onClose={this.handleCloseModal}
          />
        </Container>
      </div>
    );
  }
}

export default connect(state => ({ isLoading: state.notes.loading }), {
  fetchNotes,
})(App);
