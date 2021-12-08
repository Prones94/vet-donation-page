import { StrictMode } from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
// import { MuiThemeProvider } from './theme'
import { App } from './App'
import 'tailwindcss/tailwind.css'

render(
  <StrictMode>
    <BrowserRouter>
      {/* <MuiThemeProvider> */}
        <App />
      {/* </MuiThemeProvider> */}
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
)
