import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';
import { titles } from '../shared/varibles/varibles';
import { FilmList } from '../components/FilmList/FilmList';
import { Footer } from '../shared/Footer/Footer';

const { homePageTitle, noMoviesTitle } = titles;

export const HomePage = ({ openModal }) => {
  const { homepage } = useContext(GlobalContext);

  return (
    <>
      <FilmList
        filmList={homepage}
        movieCardType="homepage"
        headerTitle={homePageTitle}
        noMoviesTitle={noMoviesTitle}
        openModal={openModal}
      />
      <Footer />
    </>
  );
};
HomePage.propTypes = {
  openModal: PropTypes.func.isRequired,
};
