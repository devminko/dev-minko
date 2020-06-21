import React, { } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// MAIN PAGES
import Navbar from '../pages/navbar/Navbar';
import HomePage from '../pages/home-page/HomePage';
import PortfolioPage from '../pages/portfolio-page/PortfolioPage';
import Footer from '../pages/footer/Footer';

// PORTFOLIO PAGES
import PortfolioAgileClient from '../components-portfolio/agile-client/PortfolioAgileClient';

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
            <Route exact path='/portfolio/agile-client' component={PortfolioAgileClient} />
          </Switch>
        </div>
          <Footer />

      </BrowserRouter>
    </div>
  )
};

export default App;
