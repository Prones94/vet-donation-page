import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './containers';
import { Landing, Register, Login, Invest, Donate, Page404 } from './pages';

// import { userAuth } from './context';
// import { ApolloProvider } from '@apollo/client';
// <ApolloProvider client={userAuth}>
// </ApolloProvider>

export function App () {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path='/login' element={<Login />} />
        <Route path="/donate" element={ <Donate /> } />
        <Route path="/invest" element={ <Invest /> } />
        <Route path="/*" element={ <Page404/> } />
      </Routes>

      <Footer />
      </>
  );
};
