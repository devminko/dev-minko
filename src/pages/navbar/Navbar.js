import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './navbar.module.scss';

// *************************** NAVBAR COMPONENT *************************** //
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <div className={style.innerContainer}>

        <div className={style.logoContainer}>
          <Link to='/' className={style.logoLink}>
            <span className={style.logo}>MK</span>
          </Link>
        </div>

        <div className={style.linksContainer}>
          <ul className={style.links}>
            <li>
              <Link to='/' className={style.link}>About</Link>
            </li>
            <li>
              <Link to='/' className={style.link}>Portfolio</Link>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  )
};

export default Navbar;