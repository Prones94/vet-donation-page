import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header, Footer } from './containers';
import { Landing, Register, Invest, Login } from './pages';
import { userAuth } from './context';
import { ApolloProvider } from '@apollo/client';
import Page404 from './pages/Page404/Page404';

export function App () {
  return (
    <ApolloProvider client={userAuth}>
      <Header />
      
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path='/login' element={<Login />} />
        {/* <Route path="/donate" element={ <Donate /> } /> */}
        <Route path="/invest" element={ <Invest /> } />
        <Route path="/*" element={ <Page404/> } />
      </Routes>

      <Footer />
    </ApolloProvider>
  );
};