import React from 'react';

import ThemeContextProvider from './contexts/ThemeContext';

import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeContextProvider>
      <Header />
      <About />
      <Footer />
    </ThemeContextProvider>
  );
}

export default App;
