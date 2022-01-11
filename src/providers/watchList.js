import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { titles } from '../varibles/varibles';
import { FilmList } from '../components/FilmList/FilmList';

const { myMoviesHeaderTitle, noMoviesTitle } = titles;

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);
  return (
    <FilmList
      filmList={watchlist}
      movieCardType="watchlist"
      headerTitle={myMoviesHeaderTitle}
      noMoviesTitle={noMoviesTitle}
    />
  );
};
