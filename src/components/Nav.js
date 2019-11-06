import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from "../contexts/ThemeContext";

const Nav = () => {

const { theme, isLightTheme, themeToggle } = useContext(ThemeContext)
  return(
    <>
      <nav className="nav-wrapper black z-depth-0">
        <div className="container">
          <NavLink to="/" className="brand-logo">Folajomi</NavLink>
          <a href="#" className="sidenav-trigger" data-target="mobile-menu"><i className="fas fa-bars"></i></a>
          <span onClick={themeToggle} className="right">{ isLightTheme ? <i className="fas fa-moon grey-text text-lighten-2"></i> : <i className="fas fa-lightbulb yellow-text text-lighten-2"></i> }</span>
          <ul className="right hide-on-med-and-down">
            <li><a href="https://jormee.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blog</a></li>
            <li><NavLink to="/portfolio/">Portfolio</NavLink></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      <ul className="sidenav" id="mobile-menu" style={{color: theme.color, backgroundColor: theme.bg}}>
        <li><a href="https://jormee.hashnode.dev/" target="_blank" rel="noopener noreferrer">Blog</a></li>
        <li><NavLink to="/portfolio/">Portfolio</NavLink></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </>
  )
}

export default Nav;