import React from 'react';
import PropTypes from 'prop-types';
import { MovieControls } from '../MovieControls/MovieControls';


const MovieCard = ({ openModal, movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />
      <MovieControls openModal={openModal} type={type} movie={movie} />
    </div>
  );
};
MovieCard.propTypes = {
  type: PropTypes.node.isRequired,
  movie: PropTypes.object.isRequired,
  openModal: PropTypes.func.isRequired,
};
export default MovieCard;
