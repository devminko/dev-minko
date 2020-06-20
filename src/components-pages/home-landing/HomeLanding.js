import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './home-landing.module.scss';

// *************************** HOME LANDING COMPONENT *************************** //
const HomeLanding = () => {
  return (
    <div className={style.homeLanding}>
      <div className={style.innerContainer}>
        
        {/* TOP CONTAINER */}
        <div className={style.topContainer}>
          <p className={style.subtitle}>Welcome to My</p>
          <h1 className={style.title}>Portfolio</h1>
          <div className={style.contentContainer}>
            <p className={style.contentText}>
              Introduction to 
              <span className={style.nameText}> Min Ko </span>
              Developer & Designer
            </p>
          </div>
        </div>

        {/* BOTTOM CONTAINER */}
        <div className={style.bottomContainer}>
          <Link to='/portfolio' className={style.portfolioLink}>
            View Portfolio
          </Link>
        </div>

      </div>
    </div>
  )
};

export default HomeLanding;