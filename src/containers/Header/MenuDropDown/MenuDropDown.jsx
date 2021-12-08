import React from 'react'
import IconButton from '@mui/material/IconButton'
import AccountCircle from '@mui/icons-material/AccountCircle'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { MenuLink } from './MenuDropDown.styles'

const MenuDropDown = () => {

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        anchorOrigin={{ 
          horizontal: 'right', 
          vertical: 'bottom' 
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><MenuLink to="/">Home</MenuLink></MenuItem>
        <MenuItem onClick={handleClose}><MenuLink to="/about">About</MenuLink></MenuItem>
        <MenuItem onClick={handleClose}><MenuLink to="/profile">Profile</MenuLink></MenuItem>
        <MenuItem onClick={handleClose}><MenuLink to="/price">Price</MenuLink></MenuItem>
        <MenuItem onClick={handleClose}><MenuLink to="/login">Login</MenuLink></MenuItem>
        <MenuItem onClick={handleClose}><MenuLink to="/logout">Logout</MenuLink></MenuItem>
      </Menu> 
    </>
  )
}

export { MenuDropDown }
