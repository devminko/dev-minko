import React, { } from 'react';
import { Link } from 'react-router-dom';
import { MdWeb } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { DiSass, DiJavascript, DiReact, DiNodejs, DiPostgresql } from 'react-icons/di';

import style from './boutique-hipster.module.scss';

// *************************** BOUTIQUE HIPSTER COMPONENT *************************** //
const BoutiqueHipster = () => {
  return (
    <div className={style.boutiqueHipster}>

      {/* HEADER */}
      <div className={style.headerContainer}>
        <h1 className={style.name}>Boutique Hipster</h1>
        <p className={style.description}>Faux High End Boutique Clothing Store</p>
      </div>

      {/* PORTFOLIO LINKS */}
      <div className={style.linksContainer}>
        <ul className={style.links}>
          <li>
            <a 
              href='https://boutique-hipster.herokuapp.com' 
              target='_blank' 
              rel='noopener noreferrer'
              className={style.link}
            >
              <MdWeb className={style.webIcon} aria-label='website icon' />
              View Website
            </a>
          </li>
          <li>
            <a 
              href='https://github.com/mko5118/boutique-hipster' 
              target='_blank' 
              rel='noopener noreferrer'
              className={style.link}
            >
              <FaGithub className={style.githubIcon} aria-label='github icon' />
              View Code
            </a>
          </li>
        </ul>
      </div>

      {/* TEST ACCOUNT */}
      <div className={style.testAccountContainer}>
        <h3 className={style.testTitle}>Test Account</h3>
        <div className={style.credentialsContainer}>
          <p className={style.accountName}>
            Log In:<span className={style.accountText}> admin@email.com</span>
          </p>
          <p className={style.accountName}>
            Password:<span className={style.accountText}> password</span>
          </p>
        </div>
      </div>

      {/* IMAGE 1 */}
      <img 
        alt='agile-client homepage'
        src="/assets/boutique-hipster-homepage-1.png"
        className={style.image}
      />

      {/* TECH STACK */}
      <div className={style.stackContainer}>
        <h2 className={style.stackTitle}>Tech Stack</h2>
        <div className={style.iconsContainer}>
          {/* 'Javascript', 'React', 'Redux', 'Node.js', 'PostgreSQL' */}
          <DiSass className={style.techIcon} aria-label='SASS icon' />
          <DiJavascript className={style.techIcon} aria-label='javascript icon' />
          <DiReact className={style.techIcon} aria-label='react icon' />
          <DiNodejs className={style.techIcon} aria-label='nodejs icon' />
          <DiPostgresql className={style.techIcon} aria-label='postgresql icon' />
        </div>
      </div>

      {/* GOALS SECTION */}
      <div className={style.goalsContainer}>
        <div className={style.textContainer}>
          <h2 className={style.goalsTitle}>Project Goals</h2>
          <p className={style.goalsDescription}>
            Boutique Hipster was created to emulate a high end Boutique Clothing store. Fully built with from the ground up with React and Node. All styling for component were created with SCSS with the goal of creating a professional looking E-Commerce website. 
            <br />
            <br />
            In addition, I wanted to create a Dashboard as well for the administrator of the website. This dashboard would allow for the admin to update the products directly through the dashboard as well as viewing all customer details and product details via the dashboard.
          </p>
        </div>
        <div className={style.goalsImageContainer}>
          <img 
            alt='agile-client dashboard'
            src='/assets/boutique-hipster-signinpage-1.png'
            className={style.goalsImage}
          />
        </div>
      </div>

      {/* PORTFOLIO LINK */}
      <div className={style.portfolioLinkContainer}>
        <Link to='/portfolio' className={style.portfolioLink}>Back to Portfolio</Link>
      </div>

    </div>
  )
};

export default BoutiqueHipster;