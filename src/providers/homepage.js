import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { GlobalContext } from '../context/GlobalState';
import { titles } from '../varibles/varibles';
import { FilmList } from '../components/FilmList/FilmList';

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
    </>
  );
};
HomePage.propTypes = {
  openModal: PropTypes.func.isRequired,
};
