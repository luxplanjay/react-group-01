import React, { Component } from 'react';
import { v4 } from 'uuid';
import NoteEditor from './NoteEditor';
import NotesList from './NotesList';
import InlineMessage from './InlineMessage';
import NotesFilter from './NotesFilter';
import initialNotes from '../notes';
import styles from './App.css';

const getVisibleNotes = (notes, filter) =>
  notes.filter(note => note.text.includes(filter));

export default class extends Component {
  state = {
    notes: [...initialNotes],
    filter: '',
  };

  addNote = text => {
    this.setState(state => ({
      notes: [{ id: v4(), text }, ...state.notes],
    }));
  };

  deleteNote = id => {
    this.setState(state => ({
      notes: state.notes.filter(note => note.id !== id),
    }));
  };

  updateNote = ({ id, text }) => {
    this.setState(state => ({
      notes: state.notes.map(
        note => (note.id === id ? { ...note, text } : note),
      ),
    }));
  };

  handleFilterChange = str => {
    this.setState({ filter: str });
  };

  render() {
    const { notes, filter } = this.state;

    const visibleNotes = getVisibleNotes(notes, filter);

    return (
      <div className={styles.container}>
        <h1 style={{ textAlign: 'center' }}>Notes App</h1>

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
