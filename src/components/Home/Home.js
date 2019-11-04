import React, { lazy, Suspense } from 'react';

const Header = lazy(() => import('./Header'));
const About = lazy(() => import('./About'));

const Home = () => {

  return(
    <div>
      <Suspense fallback={<h4>Please wait...</h4>}>
        <Header />
        <About />
      </Suspense>
    </div>
  )

}

export default Home;