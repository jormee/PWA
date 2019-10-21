import React, { useContext } from 'react';

import { ThemeContext } from '../contexts/ThemeContext';


const Header = () => {

  const { isLightTheme, themeToggle } = useContext(ThemeContext)

  return(

    <header className="header">

      <nav className="transparent nav-wrapper z-depth-0">
        <div className="container">
          <a href="/home/" className="brand-logo">Folajomi</a>
          <a href="//" className="sidenav-trigger" data-target="mobile-menu"><i className="fas fa-bars"></i></a>
          <span onClick={themeToggle} className="right">{ isLightTheme ? <i className="fas fa-moon grey-text text-lighten-2"></i> : <i className="fas fa-lightbulb yellow-text text-lighten-2"></i> }</span>
          <ul className="right hide-on-med-and-down">
            <li><a href="https://jormee.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blog</a></li>
            <li><a href="/portfolio/">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-menu">
        <li><a href="https://jormee.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blog</a></li>
        <li><a href="/portfolio/">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="container row">

        <div className="col s12 m4 l4 push-l8 push-m8">
          <lottie-player 
            src="https://assets7.lottiefiles.com/packages/lf20_HjK9Ol.json" className="right" mode="bounce" background="transparent"  speed="0.5"   loop  autoplay >
          </lottie-player>
        </div>
        <div className="col s12 m8 l8 pull-l4 pull-m4">
          <h1 className="title">Hi There!</h1>
          <p className="white-text text flow-text">I'm Folajomi, It's a pleasure to have you <span role="img" aria-label="smiling face" className="emoji">&#128513;</span></p>
        </div>
      </div>

    </header>
  )
}

export default Header;