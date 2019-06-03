import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background: #8e9eab;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #979a9a, #b3b6b7 );  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #979a9a, #b3b6b7); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;