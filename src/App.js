import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import ThemeContextProvider from './contexts/ThemeContext';

const client = new ApolloClient({
  uri: process.env.REACT_APP_GITHUB_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
  }   
})

const Portfolio = lazy(() => import('./components/Portfolio/Portfolio'));
const Home = lazy(() => import('./components/Home/Home'));
const Nav = lazy(() => import('./components/Nav'));
const Err = lazy(() => import('./components/Err'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <ApolloProvider client = {client}>
      <Suspense fallback={<h5>Please wait...</h5>}>
        <ThemeContextProvider>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route component={Err} />
          </Switch>
          <Footer />
        </ThemeContextProvider>
      </Suspense>
    </ApolloProvider>
  );
}

export default App;
