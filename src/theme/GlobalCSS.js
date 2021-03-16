import { createGlobalStyle } from 'styled-components'

export const GlobalCSS = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto Mono', monospace;
  font-weight: 400;
}

body {
  background-color: ${({ theme }) => theme.colors.lightGray};
  min-height: 100vh;
  min-width: 100vw;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, li {
  list-style: none;
}
`
