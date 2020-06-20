import React, { } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../pages/navbar/Navbar';
import HomePage from '../pages/home-page/HomePage';
import Footer from '../pages/footer/Footer';

import style from './app.module.scss';

// *************************** APP COMPONENT *************************** //
const App = () => {
  return(
    <div className={style.app}>
      <BrowserRouter>

        <div className={style.content}>
          <Navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
          </Switch>
        </div>
          <Footer />

      </BrowserRouter>
    </div>
  )
};

export default App;
