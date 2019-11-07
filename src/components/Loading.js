import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Loading = () => {

  const {theme} = useContext(ThemeContext);
return(
  <div style={{color: theme.title, backgroundColor: theme.bg}}>
    <div className='container valign-wrapper'>
      <h5>Loading...</h5>
    </div>
  </div>
)
}

export default Loading;