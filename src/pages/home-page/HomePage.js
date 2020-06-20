import React, { } from 'react';

import HomeLanding from '../../components-pages/home-landing/HomeLanding';

import style from './home-page.module.scss';

// *************************** HOME PAGE COMPONENT *************************** //
const HomePage = () => {
  return (
    <div className={style.homePage}>
    
      <HomeLanding />

    </div>
  )
};

export default HomePage;