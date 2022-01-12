import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './shared/Header/Header';
import { Watchlist } from './providers/watchList';
import { Watched } from './providers/watchedList';
import Modal from './components/Modal/Modal';
import { Add } from './components/Add/Add';
import { HomePage } from './providers/homepage';
import './App.css';
import './lib/font-awesome/css/all.min.css';

import { GlobalProvider } from './context/GlobalState';

function App() {
  const [modalFilmId, setModalFilmId] = useState(null);
  const onClickModal = newId => setModalFilmId(newId);

  return (
    <GlobalProvider>
      <Router>
        <>
          <Header />
          {modalFilmId && (
            <Modal closeModal={onClickModal} movie={modalFilmId} />
          )}
          <Switch>
            <Route exact path="/">
              <HomePage openModal={onClickModal} />
            </Route>
            <Route exact path="/watchlist">
              <Watchlist openModal={onClickModal} />
            </Route>
            <Route path="/add">
              <Add />
            </Route>
            <Route path="/watched">
              <Watched openModal={onClickModal} />
            </Route>
          </Switch>
        </>
      </Router>
    </GlobalProvider>
  );
}

export default App;
