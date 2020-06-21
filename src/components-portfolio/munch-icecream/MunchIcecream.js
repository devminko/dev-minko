import React, { } from 'react';
import { Link } from 'react-router-dom';
import { MdWeb } from 'react-icons/md';
import { DiJavascript, DiReact, DiSass } from 'react-icons/di';
import { FaWix } from 'react-icons/fa';

import style from './munch-icecream.module.scss';

// *************************** MUNCH ICECREAM COMPONENT *************************** //
const MunchIcecream = () => {
  return (
    <div className={style.munchIcecream}>

      {/* HEADER */}
      <div className={style.headerContainer}>
        <h1 className={style.name}>Munch Icecream</h1>
        <p className={style.description}>Dessert Shop in Northern Virginia</p>
      </div>

      {/* PORTFOLIO LINKS */}
      <div className={style.linksContainer}>
        <ul className={style.links}>
          <li>
            <a 
              href='https://www.munchicecream.com/' 
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
        src="/assets/munch-icecream-homepage-1.png"
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
            Munch Ice Cream wanted a redesign of their former website to be more in tune with the identity of their business. 
            <br />
            <br />
            Similar to places such as Voodoo Donut's in Washington state and other eccentric sweet shops in California / New York, their food items packed a lot of personality into each of their items and as such I wanted to create a similar vibe with the website itself. 
            <br />
            <br />
            I worked together with the owner and manager to redesign the website to match energy of the business.
          </p>
        </div>
        <div className={style.goalsImageContainer}>
          <img 
            alt='agile-client dashboard'
            src='/assets/munch-icecream-productpage-1.png'
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

export default MunchIcecream;