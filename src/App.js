import { ThemeProvider } from 'styled-components'

import Router from 'routes'
import theme, { GlobalCSS } from 'theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalCSS />
    <Router />
  </ThemeProvider>
)

export default App
