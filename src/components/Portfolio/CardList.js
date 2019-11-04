import React, { lazy, useContext } from 'react';
import { PortfolioContext } from '../../contexts/PortfolioContext';

const Card = lazy(() => import('./Card'));

const CardList = () => {
  const { loading, error, data } = useContext(PortfolioContext);
  
  if(error){return <h1>error</h1>}

  if(loading){
    return <h1>loading</h1>
  }
  
  const { nodes } = data.user.repositories;
  return(
    <div className='cardlist'>
      {nodes.map(node => <Card key={node.id} node={node} />)}
    </div>
  )

}

export default CardList;