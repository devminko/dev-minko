import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './portfolio-preview-template.module.scss';

// *************************** PORTFOLIO PREVIEW TEMPLATE COMPONENT *************************** //
/**
 1. Template used to preview Portfolio Projects on 'PortfolioPage.js' component 
**/

const PortfolioPreviewTemplate = ({ number, name, description, link, stack, image, agileclient, theblock, munchicecream, boutiquehipster, skynet, techvice }) => {
  return (
    <div 
      className={`
        ${agileclient ? style.agileclient : ''}
        ${theblock ? style.theblock : ''}
        ${munchicecream ? style.munchicecream : ''}
        ${boutiquehipster ? style.boutiquehipster : ''}
        ${skynet ? style.skynet : ''}
        ${techvice ? style.techvice : ''}
        ${style.portfolioPreviewTemplate}
      `}
    >
      
      {/* HEADER */}
      <div className={style.headerContainer}>
        <h2 className={style.title}>PROJECT {number}</h2>
        <h1 className={style.name}>{name}</h1>
        <p className={style.description}>{description}</p>
        <Link to={link} className={style.link}>About {name}</Link>
      </div>

      {/* TECH STACK */}
      <div className={style.techstackContainer}>
        <p className={style.techstackTitle}>Created With</p>
        <div className={style.techstack}>
          {
            stack.map((stackItem, idx) => (
              <p key={idx} className={style.techstackItem}>{stackItem}</p>
            ))
          }
        </div>
      </div>

      {/* IMAGE */}
      <div className={style.imageContainer} />

    </div>
  )
};

export default PortfolioPreviewTemplate;