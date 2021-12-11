import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Header } from './containers'
import { Landing, Register, Invest, Login } from './pages'

export function App () {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={ <Landing /> } />
        <Route path="/invest" element={ <Invest /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  )
}