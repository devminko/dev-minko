import React, { } from 'react';
import { Link } from 'react-router-dom';
import { MdWeb } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { DiSass, DiJavascript, DiReact, DiNodejs, DiPostgresql } from 'react-icons/di';

import style from './skynet.module.scss';

// *************************** SKYNET COMPONENT *************************** //
const Skynet = () => {
  return (
    <div className={style.skynet}>

      {/* HEADER */}
      <div className={style.headerContainer}>
        <h1 className={style.name}>Skynet</h1>
        <p className={style.description}>Minimal / limited social media application</p>
      </div>

      {/* PORTFOLIO LINKS */}
      <div className={style.linksContainer}>
        <ul className={style.links}>
          <li>
            <a 
              href='https://skynet-app-1.herokuapp.com/' 
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
              href='https://github.com/chrisbrinkmann/skynet' 
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
        src="/assets/skynet-homepage-1.png"
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
            On this project I worked in conjunction with a back-end developer and provided the front-end development.
            <br />
            <br />
            Skynet was created as a social media application to allow users to create accounts, add friends, create and comment on posts in addition to being able to view a newsfeed of your friends posts as well as your own.
            <br />
            <br />
            The features are fairly rudimentary and the styling leaves much to be desired but this was done more as an exercise of working together with another developer and a project manager overseeing the workflow. 
          </p>
        </div>
        <div className={style.goalsImageContainer}>
          <img 
            alt='agile-client dashboard'
            src='/assets/skynet-userpage-1.png'
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

export default Skynet;