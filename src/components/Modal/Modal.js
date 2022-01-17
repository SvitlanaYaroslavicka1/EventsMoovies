import React from 'react';
import './Modal.scss';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';

const Modal = ({ closeModal, movie }) => {
  return createPortal(
    <div className="modal">
      <div className="modal-main">
        <div className="modal-main__poster-block">
          <img
            className="modal-main__poster-image"
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={`${movie.title} Poster`}
          />
        </div>
        <div className="modal-main__inner-container">
          <div className="modal-main__film-info__description">
            <h2 className="film-info__title">{movie.title}</h2>
            <ul className="film-info__table">
              <li className="film-info__table-item">
                <p className="film-info__table-line-title">Vote / Votes</p>
                <span className="film-info__vote">{movie.vote_average}</span>/
                <span className="film-info__votes">{movie.vote_count}</span>
              </li>
              <li className="film-info__table-item">
                <p className="film-info__table-line-title">Popularity</p>
                <span className="film-info__popularity">
                  {movie.popularity}
                </span>
              </li>
              <li className="film-info__table-item">
                <p className="film-info__table-line-title">Original Title</p>
                <span className="film-info__original-title">
                  {movie.original_title}
                </span>
              </li>
              <li className="film-info__table-item">
                <p className="film-info__table-line-title">Release Date</p>
                <span className="film-info__popularity">
                  {movie.release_date}
                </span>
              </li>
            </ul>
            <h3 className="film-info__about-title">About</h3>
            <p className="film-info__about-text">{movie.overview}</p>
          </div>
        </div>

        <button
          className="modal-main__button-close"
          type="button"
          onClick={() => closeModal(null)}
        >
          X
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
