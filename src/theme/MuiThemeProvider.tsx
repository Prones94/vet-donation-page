import React, { FC } from 'react'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { theme } from './theme'

const MuiThemeProvider: FC = ({ children }) => {
  return (
    <ThemeProvider theme={ theme }>
      <CssBaseline />
      { children }
    </ThemeProvider>
  )
}

export { MuiThemeProvider }
