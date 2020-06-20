import React, { } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin  } from 'react-icons/fa';

import style from './footer.module.scss';

// *************************** FOOTER COMPONENT *************************** //
const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.innerContainer}>

        <div className={style.logoContainer}>
          <Link to='/' className={style.logoLink}>
            <span className={style.logo}>MK</span>
          </Link>
        </div>

        <div className={style.contentContainer}>
          <p className={style.text}>Full stack web developer & web designer based in Northern Virginia.</p>
        </div>

        <div className={style.linksContainer}>
          <Link to='/' className={style.link}>About</Link>
          <Link to='/' className={style.link}>Portfolio</Link>
        </div>

        <div className={style.iconsContainer}>
          <a href='https://github.com/mko5118' target='_blank' rel='noopener noreferrer'>
            <FaGithub className={style.github} aria-label='Github Link' />
          </a>
          <a href='https://www.linkedin.com/in/min-ko-695601186/' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin className={style.linkedin} aria-label='Linkedin Link' />
          </a>
        </div>

        <div className={style.copyrightContainer}>
          <p className={style.copyright}>© 2020, Min Ko</p>
        </div> 

      </div>
    </footer>
  )
};

export default Footer;