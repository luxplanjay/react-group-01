import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { addNote } from '../../redux/actions/notes';
import NoteEditor from '../note-editor';

Modal.setAppElement('#root');

const modalStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  content: {
    width: 500,
    height: 300,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
};

const NoteEditorModal = ({ isOpen, onClose, onSave }) => (
  <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
    <NoteEditor onSave={onSave} onCancel={onClose} />
  </Modal>
);

NoteEditorModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

const mDTP = dispatch => ({
  onSave: text => dispatch(addNote(text)),
});

export default connect(null, mDTP)(NoteEditorModal);
