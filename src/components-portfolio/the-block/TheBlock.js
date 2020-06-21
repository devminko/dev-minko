import React, { } from 'react';
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
        <p className={style.description}>Asian Inspired Foodhall in Northern Virginia</p>
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
            The Block Foodhall wanted a redesign of their initial website as the one they had when they had originally opened was not how they wanted to represent their business. When I was tasked with creating the website, the foodhall hadn't come into their own identity as they are today (a trendy, bright, colorful foodie hangout), so I worked with the manager to create a modern looking website without boxing them into a distinct identity.
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

    </div>
  )
};

export default TheBlock;