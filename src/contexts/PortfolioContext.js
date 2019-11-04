import React, { createContext } from 'react';
import { graphql } from 'react-apollo';

import { getReposQuery } from "../queries/GetRepos";
import { useQuery } from '@apollo/react-hooks';


export const PortfolioContext = createContext();

const PortfolioContextProvider = props => {
  const { loading, error, data } = useQuery(getReposQuery);
      
  return(
    <PortfolioContext.Provider value = {{ loading, error, data }}>
      {props.children}
    </PortfolioContext.Provider>
  )
}

export default graphql(getReposQuery)(PortfolioContextProvider);