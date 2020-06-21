import React, { } from 'react';
import { MdWeb } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { DiSass, DiJavascript, DiReact, DiFirebase } from 'react-icons/di';

import style from './tech-vice.module.scss';

// *************************** TECH VICE COMPONENT *************************** //
const TechVice = () => {
  return (
    <div className={style.techVice}>

      {/* HEADER */}
      <div className={style.headerContainer}>
        <h1 className={style.name}>Tech Vice</h1>
        <p className={style.description}>Mock modern e-commerce site</p>
      </div>

      {/* PORTFOLIO LINKS */}
      <div className={style.linksContainer}>
        <ul className={style.links}>
          <li>
            <a 
              href='https://dry-journey-01843.herokuapp.com' 
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
              href='https://github.com/mko5118/the-tech-vice' 
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
            Log In:<span className={style.accountText}> johnson@gmail.com</span>
          </p>
          <p className={style.accountName}>
            Password:<span className={style.accountText}> johnson</span>
          </p>
        </div>
      </div>

      {/* IMAGE 1 */}
      <img 
        alt='agile-client homepage'
        src="/assets/tech-vice-homepage-1.png"
        className={style.image}
      />

      {/* TECH STACK */}
      <div className={style.stackContainer}>
        <h2 className={style.stackTitle}>Tech Stack</h2>
        <div className={style.iconsContainer}>
          {/* 'Javascript', 'React', 'Redux', 'Firebase' */}
          <DiSass className={style.techIcon} aria-label='SASS icon' />
          <DiJavascript className={style.techIcon} aria-label='javascript icon' />
          <DiReact className={style.techIcon} aria-label='react icon' />
          <DiFirebase className={style.techIcon} aria-label='firebase icon' />
        </div>
      </div>

      {/* GOALS SECTION */}
      <div className={style.goalsContainer}>
        <div className={style.textContainer}>
          <h2 className={style.goalsTitle}>Project Goals</h2>
          <p className={style.goalsDescription}>
            Tech Vice was created to represent a faux e-commerce store. An e-commerce store contains many intertwined components that rely on each other to send and receive data and as such thought it would be a good project to build out.
          </p>
        </div>
        <div className={style.goalsImageContainer}>
          <img 
            alt='agile-client dashboard'
            src='/assets/tech-vice-aboutpage-1.png'
            className={style.goalsImage}
          />
        </div>
      </div>

    </div>
  )
};

export default TechVice;