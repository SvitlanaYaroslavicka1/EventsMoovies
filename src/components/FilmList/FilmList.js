import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';

export const FilmList = ({
  openModal,
  filmList,
  movieCardType,
  headerTitle,
  noMoviesTitle,
}) => {
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">{headerTitle}</h1>

          <span className="count-pill">
            {filmList.length} {filmList.length === 1 ? 'Movie' : 'Movies'}
          </span>
        </div>

        {filmList.length > 0 ? (
          <div className="movie-grid">
            {filmList.map(movie => (
              <MovieCard
                openModal={openModal}
                movie={movie}
                key={movie.id}
                type={movieCardType}
              />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">{noMoviesTitle}</h2>
        )}
      </div>
    </div>
  );
};

FilmList.propTypes = {
  filmList: PropTypes.array.isRequired,
  movieCardType: PropTypes.string.isRequired,
  headerTitle: PropTypes.string.isRequired,
  noMoviesTitle: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
