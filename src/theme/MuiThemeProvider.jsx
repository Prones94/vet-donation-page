import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { theme } from './theme';

const MuiThemeProvider = ({ children }) => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        { children }
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export { MuiThemeProvider };
