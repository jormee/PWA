import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

const Card = ({ node }) => {

  const {theme} = useContext(ThemeContext);
  const { name, description, url, homepageUrl } = node;

  return(
    <div className='repo' style={{backgroundColor: theme.ui, color: theme.color}}>
      <div>
        <h4 style={{color: theme.title}}>{name}</h4>
      </div>
      <div  className='repo-description'>
        <p>{description}</p>
      </div>
      <div className='links'>
        <a href={homepageUrl} target='_ blank' rel='noreferrer noopener'><i className='fas fa-globe'></i></a>
        <a href={url} target='_blank' rel='noreferrer noopener'><i className='fab fa-github'></i></a>
      </div>
    </div>
  )
}

export default Card;