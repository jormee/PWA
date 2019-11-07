import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';


const Header = () => {

  const { theme } = useContext(ThemeContext);

  return(

    <header className="header">
      <div className="cover">
        <div className="container row">

          <div className="col s12 m4 l4 push-l8 push-m8">
            <lottie-player 
              src="https://assets7.lottiefiles.com/packages/lf20_HjK9Ol.json" className="right" background="transparent"  speed="0.5" autoplay >
            </lottie-player>
          </div>
          <div className="col s12 m8 l8 pull-l4 pull-m4">
            <h3 style={{color: theme.title}} className="title">Hi There!</h3>
            <p className="white-text text flow-text">I'm Folajomi<span role="img" aria-label="smiling face" className="emoji">&#128513;</span></p>
            <p className="white-text text flow-text">I am a <span style={{color: theme.title}}>FrontEnd Web Developer</span></p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;