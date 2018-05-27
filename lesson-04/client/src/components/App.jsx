import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import NoteEditor from './NoteEditor';
import NotesList from './NotesList';
import InlineMessage from './InlineMessage';
import NotesFilter from './NotesFilter';
import Loader from './shared/Loader';
import { getVisibleNotes } from '../utils/selectors';
import * as api from '../utils/api';
import styles from './App.css';

class App extends Component {
  state = {
    notes: [],
    filter: '',
    isLoading: false,
  };

  // static getDerivedStateFromProps() {
  //   console.log('[APP]: getDerivedStateFromProps');
  //   return null;
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[APP]: shouldComponentUpdate');
  //   return true;
  // }

  // getSnapshotBeforeUpdate() {
  //   console.log('[APP]: getSnapshotBeforeUpdate');

  //   return {
  //     scrollPos: 10,
  //   };
  // }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   console.log('[APP]: componentDidUpdate');
  // }

  componentDidMount() {
    // console.log('[APP]: componentDidMount');

    this.fetchAllNotes();
  }

  fetchAllNotes = () => {
    this.setState({ isLoading: true });

    api.fetchAllNotes().then(({ data, error }) => {
      if (error) {
        console.log(error);

        this.setState({ isLoading: false });
        return;
      }

      this.setState({ notes: data, isLoading: false });
    });
  };

  addNote = text => {
    const note = { text, completed: false };

    this.setState({ isLoading: true });

    api.addNote(note).then(({ data, error }) => {
      if (error) {
        console.log(error);

        this.setState({ isLoading: false });
        return;
      }

      this.setState(state => ({
        notes: [...state.notes, data],
        isLoading: false,
      }));
    });
  };

  deleteNote = id => {
    this.setState({ isLoading: true });

    api.deleteNote(id).then(({ error }) => {
      if (error) {
        console.log(error);

        this.setState({ isLoading: false });
        return;
      }

      this.setState(state => ({
        notes: state.notes.filter(note => note.id !== id),
        isLoading: false,
      }));
    });
  };

  updateNote = ({ id, text }) => {
    const note = this.state.notes.find(n => n.id === id);
    const noteToUpdate = { ...note, text };

    this.setState({ isLoading: true });

    api.updateNote(noteToUpdate).then(({ data, error }) => {
      if (error) {
        console.log(error);

        this.setState({ isLoading: false });
        return;
      }

      this.setState(state => ({
        notes: state.notes.map(n => (n.id === data.id ? data : n)),
        isLoading: false,
      }));
    });
  };

  handleFilterChange = str => {
    this.setState({ filter: str });
  };

  render() {
    // console.log('[APP] render');

    const { notes, filter, isLoading } = this.state;
    const visibleNotes = getVisibleNotes(notes, filter);

    return (
      <div className={styles.container}>
        <h1 style={{ textAlign: 'center' }}>Notes App</h1>

        {isLoading && <Loader width={80} height={80} />}

        <NoteEditor onFormSubmit={this.addNote} />

        <NotesFilter onFilterChange={this.handleFilterChange} filter={filter} />

        {notes.length > 0 ? (
          <NotesList
            notes={visibleNotes}
            onDeleteNote={this.deleteNote}
            onUpdateNote={this.updateNote}
          />
        ) : (
          <InlineMessage text="You have zero notes" />
        )}
      </div>
    );
  }
}

export default hot(module)(App);
