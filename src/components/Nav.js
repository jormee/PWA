import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import { ThemeContext } from "../contexts/ThemeContext";
import { SidenavContext } from "../contexts/SidenavContext";

const Nav = () => {

const { theme, isLightTheme, themeToggle } = useContext(ThemeContext);
const { isActive, toggleSidenav } = useContext(SidenavContext);

  return(
    <div className="navbar-fixed">
      <nav className="nav-wrapper black z-depth-0">
        <div className="container">
          <NavLink to="/" className="brand-logo">Folajomi</NavLink>
          

          <span onClick={themeToggle} className="right">
          { 
            isLightTheme 
            ? <i className="fas fa-moon grey-text text-lighten-2"></i> 
            : <i className="fas fa-lightbulb yellow-text text-lighten-2"></i> 
          }
          </span>

          <ul className="right hide-on-med-and-down" style={{color: theme.title}}>
            <li><a href="https://jormee.hashnode.dev/" target="_blank" rel="noopener noreferrer" >Blog</a></li>
            <li><NavLink to="/portfolio/">Portfolio</NavLink></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <a href="//" className="sidenav-toggle hide-on-large-only" style={{color: theme.title}} onClick={toggleSidenav}>
          {
            isActive 
            ? <i className="fas fa-times"></i> 
            : <i className="fas fa-bars"></i>
          } 
          </a>
        </div>
      </nav>

      <ul data-state={isActive} style={{color: theme.color, backgroundColor: theme.nav}}>
        <li><a href="https://jormee.hashnode.dev/" target="_blank" rel="noopener noreferrer" style={{color: theme.title}}>Blog</a></li>
        <li><NavLink to="/portfolio/" style={{color: theme.title}}>Portfolio</NavLink></li>
        <li><a href="#contact" style={{color: theme.title}}>Contact</a></li>
      </ul>
    </div>
  )
}

export default Nav;