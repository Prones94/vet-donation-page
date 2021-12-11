import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './containers'
import { Home, Register, Invest } from './pages'

export function App () {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/invest" element={ <Invest /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </>
  )
}