import React from 'react';
import './Modal.css';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const Modal = ({ closeModal, movie }) => {
  return createPortal(
    <div className="modal">
      <div className="modal-main">
        <h1>{movie.id}</h1>
        <button type="button" onClick={() => closeModal(null)}>
          Close
        </button>
      </div>
    </div>,
    document.querySelector('#root-modal'),
  );
};
Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};
export default Modal;
document.querySelector('#root-modal');
