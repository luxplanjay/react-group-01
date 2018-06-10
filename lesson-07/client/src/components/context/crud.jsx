/* eslint-disable */
import React, { Component, createContext } from 'react';
import * as api from '../../utils/api';

const CrudContext = createContext(null);

export default class CRUD extends Component {
  static Consumer = CrudContext.Consumer;

  state = { notes: [], isLoading: false, error: null };

  componentDidMount() {
    this.fetchAllNotes();
  }

  fetchAllNotes = () => {
    this.setState({ isLoading: true });

    api.fetchAllNotes().then(({ data, error }) => {
      this.setState(state => ({
        notes: error ? state.notes : data,
        isLoading: false,
        error,
      }));
    });
  };

  addNote = text => {
    const note = { text, completed: false };

    this.setState({ isLoading: true });

    api.addNote(note).then(({ data, error }) => {
      // this.handleCloseModal();

      this.setState(state => ({
        notes: error ? state.notes : [...state.notes, data],
        isLoading: false,
        error,
      }));
    });
  };

  deleteNote = id => {
    this.setState({ isLoading: true });

    api.deleteNote(id).then(({ error }) => {
      this.setState(state => ({
        notes: error ? state.notes : state.notes.filter(note => note.id !== id),
        isLoading: false,
        error,
      }));
    });
  };

  updateNote = ({ id, text }) => {
    const note = this.state.notes.find(n => n.id === id);
    const noteToUpdate = { ...note, text };

    this.setState({ isLoading: true });

    api.updateNote(noteToUpdate).then(({ data, error }) => {
      this.setState(state => ({
        notes: error
          ? state.notes
          : state.notes.map(n => (n.id === data.id ? data : n)),
        isLoading: false,
        error,
      }));
    });
  };

  render() {
    const publicApi = {
      ...this.state,
      onAddNote: this.addNote,
      onDeleteNote: this.deleteNote,
      onUpdateNote: this.updateNote,
    };

    return (
      <CrudContext.Provider value={publicApi}>
        {this.props.children}
      </CrudContext.Provider>
    );
  }
}
