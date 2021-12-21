import React from 'react';
import { ApolloProvider as ContextProvider } from '@apollo/client';
import { userAuth } from '../auth';

const ApolloProvider = ({ children }) => {
  return (
    <ContextProvider client={ userAuth }>
      { children }
    </ContextProvider>
  );
};

export { ApolloProvider };