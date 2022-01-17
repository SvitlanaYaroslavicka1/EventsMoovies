import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';
import { titles } from '../shared/varibles/varibles';
import { FilmList } from '../components/FilmList/FilmList';
import { Footer } from '../shared/Footer/Footer';

const { myMoviesHeaderTitle, noMoviesTitle } = titles;

export const Watchlist = ({ openModal }) => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <>
      <FilmList
        filmList={watchlist}
        movieCardType="watchlist"
        headerTitle={myMoviesHeaderTitle}
        noMoviesTitle={noMoviesTitle}
        openModal={openModal}
      />
      <Footer />
    </>
  );
};

Watchlist.propTypes = {
  openModal: PropTypes.func.isRequired,
};
