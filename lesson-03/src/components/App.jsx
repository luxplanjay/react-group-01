import React, { Component } from 'react';
import { v4 } from 'uuid';
import AddNoteForm from './AddNoteForm';
import NotesList from './NotesList';
import InlineMessage from './InlineMessage';
import initialNotes from '../notes';
import Button from './Button';

export default class extends Component {
  state = {
    notes: [...initialNotes],
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

  // TODO: RORO
  updateNote = (id, text) => {
    this.setState(state => ({
      notes: state.notes.map(
        note => (note.id === id ? { ...note, text } : note),
      ),
    }));
  };

  render() {
    const { notes } = this.state;

    return (
      <div>
        <AddNoteForm onFormSubmit={this.addNote} />
        <Button text="Click me" />
        {notes.length > 0 ? (
          <NotesList
            notes={notes}
            onDeleteNote={this.deleteNote}
            onUpdateNote={this.updateNote}
          />
        ) : (
          <InlineMessage text="No notes yet" />
        )}
      </div>
    );
  }
}
