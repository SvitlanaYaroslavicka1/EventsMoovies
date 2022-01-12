import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../../context/GlobalState';

export const MovieControls = ({ openModal, type, movie }) => {
  const {
    removeMovieFromWatchlist,
    addMovieToWatched,
    moveToWatchlist,
    removeFromWatched,
  } = useContext(GlobalContext);

  return (
    <div className="inner-card-controls">
      {type === 'watchlist' && (
        <>
          <button
            type="button"
            className="ctrl-btn"
            onClick={() => addMovieToWatched(movie)}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            type="button"
            className="ctrl-btn"
            onClick={() => removeMovieFromWatchlist(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === 'watched' && (
        <>
          <button
            type="button"
            className="ctrl-btn"
            onClick={() => moveToWatchlist(movie)}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            type="button"
            className="ctrl-btn"
            onClick={() => removeFromWatched(movie.id)}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      <button
        type="button"
        onClick={() => {
          openModal(movie);
          console.log(11111);
        }}
      >
        Open
      </button>
    </div>
  );
};

MovieControls.propTypes = {
  type: PropTypes.node.isRequired,
  movie: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};
