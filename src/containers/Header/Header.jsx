import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { MenuDropDown } from './MenuDropDown/MenuDropDown'
import { HeaderText } from './Header.styles'

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <MenuDropDown />
        <HeaderText>Secure Social Media</HeaderText>
      </Toolbar>
    </AppBar>
  )
}

export { Header }
