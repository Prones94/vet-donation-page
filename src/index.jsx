import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { MuiThemeProvider, GlobalStyles } from './theme'
import { ApolloProvider } from './graphql'

import { App } from './App'
import 'tailwindcss/tailwind.css'

render(
  <StrictMode>
    <ApolloProvider>
      <MuiThemeProvider>
        <BrowserRouter>
          <GlobalStyles />
          <App />
        </BrowserRouter>
      </MuiThemeProvider>
    </ApolloProvider>
  </StrictMode>,
  document.getElementById('root')
)
