/* eslint-disable no-shadow */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AppBar from '../app-bar';
import NoteEditorModal from '../note-editor-modal';
import NotesList from '../../containers/notes-list';
import PrioritySelector from '../../containers/priority-selector';
import Loader from '../shared/loader';
import NotesFilter from '../../containers/notes-filter';
import Button from '../shared/button';
import Container from '../shared/container';
import { showModal, hideModal, fetchNotes } from '../../redux/actions';
import { isModalOpen, isLoading } from '../../redux/selectors';
import styles from './styles.css';

class App extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    isModalOpen: PropTypes.bool.isRequired,
    showModal: PropTypes.func.isRequired,
    hideModal: PropTypes.func.isRequired,
    fetchNotes: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    const { isLoading, isModalOpen, showModal, hideModal } = this.props;

    return (
      <div className={styles.page}>
        <AppBar>
          <Button onClick={showModal} text="Create Note" />
          <NotesFilter />
          <PrioritySelector />
        </AppBar>

        <Container>
          {isLoading && <Loader />}
          <NotesList />

          <NoteEditorModal isOpen={isModalOpen} onClose={hideModal} />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: isLoading(state),
  isModalOpen: isModalOpen(state),
});

const mapDispatchToProps = { fetchNotes, showModal, hideModal };

export default connect(mapStateToProps, mapDispatchToProps)(App);
