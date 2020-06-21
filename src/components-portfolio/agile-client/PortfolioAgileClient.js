import React, { } from 'react';
import { MdWeb } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { DiJavascript, DiReact, DiDjango, DiPostgresql, DiDocker } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
// import { DiSass, DiNodejs, DiFirebase } from 'react-icons/di';
// import { FaWix } from 'react-icons/fa';

import style from './portfolio-agile-client.module.scss';

// *************************** PORTFOLIO AGILE CLIENT COMPONENT *************************** //
const PortfolioAgileClient = () => {
  return (
    <div className={style.portfolioAgileClient}>

      {/* HEADER */}
      <div className={style.headerContainer}>
        <h1 className={style.name}>Agile Client</h1>
        <p className={style.description}>Fully featured Client Relationship Manager</p>
      </div>

      {/* PORTFOLIO LINKS */}
      <div className={style.linksContainer}>
        <ul className={style.links}>
          <li>
            <a 
              href='https://agile-client.herokuapp.com' 
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
              href='https://github.com/mko5118/agile-client' 
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

      {/* IMAGE 1 */}
      <img 
        alt='agile-client homepage'
        src="/assets/agile-client-homepage-1.png"
        className={style.image}
      />

      {/* TECH STACK */}
      <div className={style.stackContainer}>
        {/* 'Javascript', 'React', 'Redux', 'Django', 'PostgreSQL', 'Docker' */}
        <h2 className={style.stackTitle}>Tech Stack</h2>
        <div className={style.iconsContainer}>
          {/* <IoLogoJavascript className={style.techIcon} aria-label='javascript icon' /> */}
          <DiJavascript className={style.techIcon} aria-label='javascript icon' />
          <DiReact className={style.techIcon} aria-label='react icon' />
          <DiDjango className={style.techIcon} aria-label='django icon' />
          <DiPostgresql className={style.techIcon} aria-label='postgresql icon' />
          <DiDocker className={style.techIcon} aria-label='docker icon' />
        </div>
      </div>

      {/* GOALS SECTION */}
      <div className={style.goalsContainer}>
        <div className={style.textContainer}>
          <h2 className={style.goalsTitle}>Project Goals</h2>
          <p className={style.goalsDescription}>
            The Block Foodhall wanted a redesign of their initial website as the one they had when they had originally opened was not how they wanted to represent their business. When I was tasked with creating the website, the foodhall hadn't come into their own identity as they are today (a trendy, bright, colorful foodie hangout), so I worked with the manager to create a modern looking website without boxing them into a distinct identity.
          </p>
        </div>
        <div className={style.goalsImageContainer}>
          <img 
            alt='agile-client dashboard'
            src='/assets/agile-client-dashboard-1.png'
            className={style.goalsImage}
          />
        </div>
      </div>

    </div>
  )
};

export default PortfolioAgileClient;