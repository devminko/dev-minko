import React, { } from 'react';

import style from './about-page.module.scss';

// *************************** ABOUT PAGE COMPONENT *************************** //
const AboutPage = () => {
  return (
    <div className={style.aboutPage}>

      {/* HEADER */}
      <div className={style.headerContainer}>
        <h1 className={style.title}>Want More?</h1>
        <p className={style.subtitle}>About Min Ko</p>
      </div>

      {/* CONTACT SECTION */}
      <div className={style.contactContainer}>
        <h2 className={style.contactsTitle}>Contact Info</h2>
        <div className={style.textContainer}>
          <p className={style.contactText}>
            Email:<span className={style.contactHighlight}> minpko@gmail.com</span>
          </p>
          <p className={style.contactText}>
            Github:
            <a
              className={style.contactHighlight}
              id={style.link}
              href='https://github.com/mko5118'
              target='_blank' 
              rel='noopener noreferrer'
            >
              View Github
            </a>
          </p>
          <p className={style.contactText}>
            Linkedin:
            <a
              className={style.contactHighlight}
              id={style.link}
              href='https://www.linkedin.com/in/min-ko-695601186/'
              target='_blank' 
              rel='noopener noreferrer'
            >
              View Linkedin
            </a>
          </p>
          <p className={style.contactText}>
            Location:<span className={style.contactHighlight}> Northern Virginia / Washington D.C.</span>
          </p>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className={style.detailsContainer}>
        <h2 className={style.detailsTitle}>Background Info</h2>
        <p className={style.detailsText}>
          A developer and designer with a love for creating beautiful code and designs.
        </p>
      </div>

    </div>
  )
};

export default AboutPage;