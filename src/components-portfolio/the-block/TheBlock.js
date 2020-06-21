import React, { } from 'react';
import { Link } from 'react-router-dom';
import { MdWeb } from 'react-icons/md';
import { DiJavascript, DiReact, DiSass } from 'react-icons/di';
import { FaWix } from 'react-icons/fa';

import style from './the-block.module.scss';

// *************************** THE BLOCK COMPONENT *************************** //
const TheBlock = () => {
  return (
    <div className={style.theBlock}>

      {/* HEADER */}
      <div className={style.headerContainer}>
        <h1 className={style.name}>The Block</h1>
        <p className={style.description}>Asian Inspired Foodhall in Northern Virginia, Maryland and Washington D.C.</p>
      </div>

      {/* PORTFOLIO LINKS */}
      <div className={style.linksContainer}>
        <ul className={style.links}>
          <li>
            <a 
              href='https://www.theblockfoodhall.com/' 
              target='_blank' 
              rel='noopener noreferrer'
              className={style.link}
            >
              <MdWeb className={style.webIcon} aria-label='website icon' />
              View Website
            </a>
          </li>
        </ul>
      </div>

      {/* IMAGE 1 */}
      <img 
        alt='agile-client homepage'
        src="/assets/the-block-homepage-1.png"
        className={style.image}
      />

      {/* TECH STACK */}
      <div className={style.stackContainer}>
        <h2 className={style.stackTitle}>Tech Stack</h2>
        <div className={style.iconsContainer}>
          <DiSass className={style.techIcon} aria-label='SASS icon' />
          <DiJavascript className={style.techIcon} aria-label='javascript icon' />
          <DiReact className={style.techIcon} aria-label='react icon' />
          <FaWix className={style.techIcon} aria-label='WIX icon' />
        </div>
      </div>

      {/* GOALS SECTION */}
      <div className={style.goalsContainer}>
        <div className={style.textContainer}>
          <h2 className={style.goalsTitle}>Project Goals</h2>
          <p className={style.goalsDescription}>
            The Block Foodhall wanted a redesign of their initial website as the one they had when they had originally opened was not how they wanted to represent their business. 
            <br />
            <br />
            When I was tasked with redesigning the website, the foodhall had come into their own identity (a trendy, bright, colorful foodie hangout), so I worked with the owner and manager to create a modern looking website that highlights the atmosphere of their three locations. 
            <br />
            <br />
            Delicious food and highly recommend you stop by if you're in the area!
          </p>
        </div>
        <div className={style.goalsImageContainer}>
          <img 
            alt='agile-client dashboard'
            src='/assets/the-block-storepage-1.png'
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

export default TheBlock;