import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './containers'
import { Landing, Register, Invest } from './pages'
import { userAuth } from './context'
import { ApolloProvider } from '@apollo/client';

export function App () {
  return (
    <ApolloProvider client={userAuth}>
      <Header />
      
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/invest" element={ <Invest /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
      </ApolloProvider>
  )
}