import React, { } from 'react';
import { Link } from 'react-router-dom';
import { MdWeb } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { DiSass, DiJavascript, DiReact, DiDjango, DiPostgresql, DiDocker } from 'react-icons/di';

import style from './agile-client.module.scss';

// *************************** AGILE CLIENT COMPONENT *************************** //
const AgileClient = () => {
  return (
    <div className={style.agileClient}>

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

      {/* TEST ACCOUNT */}
      <div className={style.testAccountContainer}>
        <h3 className={style.testTitle}>Test Account</h3>
        <div className={style.credentialsContainer}>
          <p className={style.accountName}>
            Log In:<span className={style.accountText}> testuser1@email.com</span>
          </p>
          <p className={style.accountName}>
            Password:<span className={style.accountText}> password</span>
          </p>
        </div>
      </div>

      {/* IMAGE 1 */}
      <img 
        alt='agile-client homepage'
        src="/assets/agile-client-homepage-1.png"
        className={style.image}
      />

      {/* TECH STACK */}
      <div className={style.stackContainer}>
        <h2 className={style.stackTitle}>Tech Stack</h2>
        <div className={style.iconsContainer}>
          <DiSass className={style.techIcon} aria-label='SASS icon' />
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
            Agile Client was created to provide a real world utility for a full fledged Contact Relationship Manager. Agile Client is comprised of three main features. 
            <br />
            <br />
            The Client feature acts as an online rolodex for which you can store contact details related to the client. It allows for the user to store details on the client's company and features a logging feature to keep details of any meetings with the client. 
            <br />
            <br />
            The Calendar feature links together with the logging feature to allow the user quick access to past meetings with any client and details of those meetings just by clicking on a specific date.
            <br />
            <br />
            Lastly, the Task Manager feature to allow the user to keep track of any tasks. This doesn't have to be tied into clients at all and can act as a general task manager.
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

      {/* PORTFOLIO LINK */}
      <div className={style.portfolioLinkContainer}>
        <Link to='/portfolio' className={style.portfolioLink}>Back to Portfolio</Link>
      </div>

    </div>
  )
};

export default AgileClient;