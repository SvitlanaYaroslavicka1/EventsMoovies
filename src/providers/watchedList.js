import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';
import { titles } from '../varibles/varibles';
import { FilmList } from '../components/FilmList/FilmList';

const { watchedHeaderTitle, noMoviesTitle } = titles;

export const Watched = ({ openModal }) => {
  const { watched } = useContext(GlobalContext);

  return (
    <FilmList
      filmList={watched}
      movieCardType="watched"
      headerTitle={watchedHeaderTitle}
      noMoviesTitle={noMoviesTitle}
      openModal={openModal}
    />
  );
};

Watched.propTypes = {
  openModal: PropTypes.func.isRequired,
};
