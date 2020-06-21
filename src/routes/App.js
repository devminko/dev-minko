import React, { } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// MAIN PAGES
import Navbar from '../pages/navbar/Navbar';
import HomePage from '../pages/home-page/HomePage';
import PortfolioPage from '../pages/portfolio-page/PortfolioPage';
import Footer from '../pages/footer/Footer';

// PORTFOLIO PAGES
import AgileClient from '../components-portfolio/agile-client/AgileClient';
import TheBlock from '../components-portfolio/the-block/TheBlock';
import MunchIcecream from '../components-portfolio/munch-icecream/MunchIcecream';
import BoutiqueHipster from '../components-portfolio/boutique-hipster/BoutiqueHipster';
import Skynet from '../components-portfolio/skynet/Skynet';
import TechVice from '../components-portfolio/tech-vice/TechVice';

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
            <Route exact path='/portfolio/agile-client' component={AgileClient} />
            <Route exact path='/portfolio/the-block' component={TheBlock} />
            <Route exact path='/portfolio/boutique-hipster' component={BoutiqueHipster} />
            <Route exact path='/portfolio/munch-icecream' component={MunchIcecream} />
            <Route exact path='/portfolio/skynet' component={Skynet} />
            <Route exact path='/portfolio/tech-vice' component={TechVice} />
          </Switch>
        </div>
          <Footer />

      </BrowserRouter>
    </div>
  )
};

export default App;
