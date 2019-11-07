import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {

  const [isLightTheme, setTheme] = useState(JSON.parse(localStorage.getItem("isLightTheme")));

  const light = { bg: 'rgba(0,0,0,.1)', nav: 'rgba(255,255,255,.9)', ui: 'white', color: 'black', title: 'firebrick' };
  const dark = { bg: 'rgb(39, 38, 38)', nav: 'rgba(0,0,0,.9)',ui: 'rgba(255,255,255,.3)', color: 'white', title: 'burlywood' };

  const themeToggle = ()  => {
    setTheme(!isLightTheme)
    localStorage.setItem("isLightTheme", !isLightTheme);
  }  

  const theme = isLightTheme ? light : dark;

  return(
    <ThemeContext.Provider value={{ isLightTheme, light, dark, theme, themeToggle }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;