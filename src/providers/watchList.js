import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';
import { titles } from '../varibles/varibles';
import { FilmList } from '../components/FilmList/FilmList';

const { myMoviesHeaderTitle, noMoviesTitle } = titles;

export const Watchlist = ({ openModal }) => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <FilmList
      filmList={watchlist}
      movieCardType="watchlist"
      headerTitle={myMoviesHeaderTitle}
      noMoviesTitle={noMoviesTitle}
      openModal={openModal}
    />
  );
};

Watchlist.propTypes = {
  openModal: PropTypes.func.isRequired,
};
