import React, { useContext } from 'react';

import PortfolioContextProvider from '../../contexts/PortfolioContext';
import { ThemeContext } from '../../contexts/ThemeContext';

import CardList from './CardList';

const Portfolio = () => {
  const {theme} = useContext(ThemeContext)
  return(
    <PortfolioContextProvider >
      <div className='portfolio' style={{color: theme.color, backgroundColor: theme.bg}}>
        <div className='container'>
          <h2 className='title' style={{color: theme.title}}>Portfolio</h2>
          <p className='repo-description' style={{color: theme.color}}>Here is a list of projects I have worked on, created using the GitHub GraphQL API using react and apollo</p>
          <CardList />
        </div>
      </div>
    </PortfolioContextProvider>
  )
}

export default Portfolio;