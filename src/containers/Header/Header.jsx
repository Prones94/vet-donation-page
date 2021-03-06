import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { MenuDropDown } from './MenuDropDown/MenuDropDown'
import { HeaderText } from './Header.styles'
import Navbar from './Navbar/Navbar'

const Header = () => {
  return (
    <AppBar position="static">
      {/* <Toolbar>
        {<MenuDropDown />}
        <HeaderText>XXII2MANY</HeaderText>
      </Toolbar> */}
      <Navbar/>
    </AppBar>
  )
}

export { Header }
