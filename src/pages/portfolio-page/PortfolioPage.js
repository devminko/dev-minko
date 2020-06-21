import React, { } from 'react';

import PortfolioPreviewTemplate from '../../components-portfolio/portfolio-preview-template/PortfolioPreviewTemplate';

import style from './portfolio-page.module.scss';

// *************************** PORTFOLIO PAGE COMPONENT *************************** //
const PortfolioPage = () => {
  return (
    <div className={style.portfolioPage}>
      
      {/* HEADER */}
      {/* <div className={style.headerContainer}>
        <h1 className={style.title}>Current Projects</h1>
        <p className={style.subtitle}>What I've Done. What I'm Working On.</p>
      </div> */}

      {/* PORTFOLIO PREVIEW */}
      <div className={style.portfolioContainer}>
        <PortfolioPreviewTemplate 
          number='1'
          name='Agile Client'
          description='Fully featured Client Relationship Manager'
          link='/portfolio/agile-client'
          stack={['Javascript', 'React', 'Redux', 'Django', 'PostgreSQL', 'Docker']}
          image='/assets/agile-client-homepage-1.png'
          agileclient
        />
        <PortfolioPreviewTemplate 
          number='2'
          name='The Block'
          description='Website for an Asian inspired foodhall in Northern Virginia'
          link='/portfolio/the-block'
          stack={['CSS', 'Javascript', 'React', 'Wix']}
          image='/assets/the-block-homepage-1.png'
          theblock
        />
        <PortfolioPreviewTemplate
          number='3' 
          name='Munch Icecream'
          description='Website for a dessert shop in Northern Virginia'
          link='/portfolio/munch-icecream'
          stack={['CSS', 'Javascript', 'React', 'Wix']}
          image='/assets/munch-icecream-homepage-1.png'
          munchicecream
        />
        <PortfolioPreviewTemplate
          number='4' 
          name='Boutique Hipster'
          description='Faux High End Boutique Clothing Store'
          link='/portfolio/boutique-hipster'
          stack={['Javascript', 'React', 'Redux', 'Node.js', 'PostgreSQL']}
          image='/assets/boutique-hipster-homepage-1.png'
          boutiquehipster
        />
        <PortfolioPreviewTemplate
          number='5' 
          name='Skynet'
          description='Minimal / limited social media application'
          link='/portfolio/skynet'
          stack={['Javascript', 'React', 'Redux', 'Node.js', 'PostgreSQL']}
          image='/assets/skynet-homepage-1.png'
          skynet
        />
        <PortfolioPreviewTemplate
          number='6' 
          name='Tech Vice'
          description='Mock modern e-commerce site'
          link='/portfolio/tech-vice'
          stack={['Javascript', 'React', 'Redux', 'Firebase']}
          image='/assets/tech-vice-productpage-1.png'
          techvice
        />
      </div>

    </div>
  )
};

export default PortfolioPage;