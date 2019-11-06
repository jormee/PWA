import React, { lazy, useContext, useEffect, useState } from 'react';
import { PortfolioContext } from '../../contexts/PortfolioContext';

const Card = lazy(() => import('./Card'));

const CardList = () => {
  const { loading, error, data } = useContext(PortfolioContext);
  const [nodes, setNodes] = useState([])

  useEffect(() => {
    if(data){
      const {nodes} = data.user.repositories;
      setNodes([...nodes])
  }},
    [data]
  )  
  return(
    <div className='cardlist'>
      {
        loading ?  <h3>Loading Repos</h3> :
        error ? <h3>We encountered an error while loading the contents of this repo</h3> :
        nodes.map(node => <Card key={node.id} node={node} />)
      }
    </div>
  )

}

export default CardList;