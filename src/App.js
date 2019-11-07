import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import Loading from './components/Loading';
import ThemeContextProvider from './contexts/ThemeContext';
import SidenavContextProvider from './contexts/SidenavContext';

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
      <ThemeContextProvider>
        <Suspense fallback={<Loading />}>
          <SidenavContextProvider>
            <Nav />
          </SidenavContextProvider>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/portfolio' component={Portfolio} />
            <Route component={Err} />
          </Switch>
          <Footer />
        </Suspense>
      </ThemeContextProvider>
    </ApolloProvider>
  );
}

export default App;
