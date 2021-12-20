import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './containers'
import { Landing, Register, Login, Donate, Invest } from './pages'
import { userAuth } from './context'
import { ApolloProvider } from '@apollo/client';

export function App () {
  return (
    <ApolloProvider client={userAuth}>
      <Header />
      
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path='/login' element={<Login />} />
        <Route path="/donate" element={ <Donate /> } />
        <Route path="/invest" element={ <Invest /> } />
      </Routes>
      </ApolloProvider>
  )
}