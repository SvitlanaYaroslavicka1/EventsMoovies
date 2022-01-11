import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { titles } from '../varibles/varibles';
import { FilmList } from '../components/FilmList/FilmList';

const { homePageTitle, noMoviesTitle } = titles;

export const HomePage = () => {
  const { homepage } = useContext(GlobalContext);
// console.log(logoTitle);
  return (
    <FilmList
      filmList={homepage}
      movieCardType="homepage"
      headerTitle={homePageTitle}
      noMoviesTitle={noMoviesTitle}
    />
  );
};
