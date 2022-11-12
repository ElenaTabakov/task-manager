import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    ...
  }

  *::before,
  *::after {
    
  }

  body {
    background: rgb(248,110,110);
    background: linear-gradient(140deg, rgba(248,110,110,1) 35%, rgba(103,107,241,1) 35%);
  }
  `