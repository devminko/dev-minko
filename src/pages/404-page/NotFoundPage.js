import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './not-found-page.module.scss';

// *************************** NOT FOUND PAGE COMPONENT *************************** //
const NotFoundPage = () => {
  return (
    <div className={style.notFoundPage}>
      
      <h1 className={style.title}>404</h1>
      <div className={style.linkContainer}>
        <Link to='/' className={style.link}>Go Home.</Link>
        <p className={style.linkText}>There's nothing here to see.</p>
      </div>

    </div>
  )
};

export default NotFoundPage;