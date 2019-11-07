import React, { lazy, Suspense } from 'react';
import Loading from '../Loading';

const Header = lazy(() => import('./Header'));
const About = lazy(() => import('./About'));

const Home = () => {

  return(
    <div>
      <Suspense fallback={<Loading />}>
        <Header />
        <About />
      </Suspense>
    </div>
  )

}

export default Home;