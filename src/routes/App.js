import React, { } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from '../pages/navbar/Navbar';
import HomePage from '../pages/home-page/HomePage';
import PortfolioPage from '../pages/portfolio-page/PortfolioPage';
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
            <Route exact path='/portfolio' component={PortfolioPage} />
          </Switch>
        </div>
          <Footer />

      </BrowserRouter>
    </div>
  )
};

export default App;
