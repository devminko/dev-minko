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
            Github:<span className={style.contactHighlight}> https://github.com/mko5118</span>
          </p>
          <p className={style.contactText}>
            Location:<span className={style.contactHighlight}> Northern Virginia</span>
          </p>
        </div>
      </div>

      {/* DETAILS SECTION */}
      <div className={style.detailsContainer}>
        <h2 className={style.detailsTitle}>Background Info</h2>
        <p className={style.detailsText}>
          A web developer mixed with a splash of web designer with a love for the Javascript ecosystem. I have a particular affinity for React.js and enjoy the flow that React provides for creating dynamic single page web pages to multi-page applications.
        </p>
        <p className={style.detailsText}>
          For frontend development I work primarily within Javascript and React.js. Any styling is done with a combination of SASS / SCSS and CSS in Javascript via Styled Components. Keeping the Javascript theme, for any back-end development I use a combination of Node.js and Firebase.
        </p>
        <p className={style.detailsText}>
          While I wouldn't call myself a designer, design theory is a topic that I am actively pursuing to learn. In today's day and age, the look and aesthetics of an application are equally as important as the product itself.
        </p>
      </div>

    </div>
  )
};

export default AboutPage;