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

      {/* IMAGE */}
      <img 
        alt={name}
        src={image}
        className={style.imageContainer}
      />

    </div>
  )
};

export default PortfolioPreviewTemplate;