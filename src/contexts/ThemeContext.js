import React, { useState, createContext } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = props => {

  const [isLightTheme, setTheme] = useState(true);
  const light = { bg: 'rgba(0,0,0,.1)', ui: 'white', color: 'black', title: 'firebrick' };
  const dark = { bg: 'rgb(39, 38, 38)', ui: 'rgba(255,255,255,.3)', color: 'white', title: 'burlywood' };

  const themeToggle = ()  => {
    setTheme(!isLightTheme);
  }

  const theme = isLightTheme ? light : dark;

  return(
    <ThemeContext.Provider value={{ isLightTheme, light, dark, theme, themeToggle }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider;