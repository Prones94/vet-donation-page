import { createTheme } from '@mui/material/styles'
// https://mui.com/customization/default-theme/
import { shape, palette, typography, breakpoints, shadows, customShadows } from './options'
import ComponentsOverrides from './overrides'

const isLight = true

const theme = createTheme({
  palette: isLight ? { ...palette.light, mode: 'light' } : { ...palette.dark, mode: 'dark' },
  shape,
  typography,
  breakpoints,
  // direction: themeDirection,
  shadows: isLight ? shadows.light : shadows.dark,
  customShadows: isLight ? customShadows.light : customShadows.dark
})

theme.components = ComponentsOverrides(theme)

export { theme }