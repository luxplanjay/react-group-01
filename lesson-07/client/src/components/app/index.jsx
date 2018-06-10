import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Modal from 'react-modal';
import AppBar from '../app-bar';
import NoteEditor from '../note-editor';
import NotesList from '../notes-list';
import InlineMessage from '../shared/inline-message';
import NotesFilter from '../notes-filter';
import Loader from '../shared/loader';
import Button from '../shared/button';
import Container from '../ui/container';
import { getVisibleNotes } from '../../utils/selectors';
import Crud from '../context/crud';

Modal.setAppElement('#root');

class App extends Component {
  state = {
    filter: '',
    isModalOpen: false,
  };

  handleOpenModal = () => this.setState({ isModalOpen: true });

  handleCloseModal = () => this.setState({ isModalOpen: false });

  handleFilterChange = str => this.setState({ filter: str });

  render() {
    const { filter, isModalOpen } = this.state;

    return (
      <div>
        <AppBar>
          <Button onClick={this.handleOpenModal}>Create Note</Button>
          <NotesFilter
            onFilterChange={this.handleFilterChange}
            filter={filter}
          />
        </AppBar>

        <Container>
          <Crud.Consumer>
            {({ notes, isLoading, onDeleteNote, onUpdateNote, onAddNote }) => (
              <div>
                {isLoading && <Loader width={80} height={80} />}

                {notes.length > 0 ? (
                  <NotesList
                    notes={getVisibleNotes(notes, filter)}
                    onDeleteNote={onDeleteNote}
                    onUpdateNote={onUpdateNote}
                  />
                ) : (
                  <InlineMessage text="You have zero notes" />
                )}

                <Modal
                  isOpen={isModalOpen}
                  onRequestClose={this.handleCloseModal}
                  contentLabel="Modal Window"
                  style={{
                    overlay: { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
                    content: {
                      width: 600,
                      height: 400,
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    },
                  }}>
                  <NoteEditor
                    onSave={onAddNote}
                    onCancel={this.handleCloseModal}
                  />
                </Modal>
              </div>
            )}
          </Crud.Consumer>
        </Container>
      </div>
    );
  }
}

export default hot(module)(App);
