import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  ${normalize}
  html,
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily};
    background-color: ${({ theme }) => theme.colors.background.main.color};
    font-display: optional
  }
  #__next {
    display: flex;
    justify-content: center;
    min-width: 320px;
    max-width:100vw;
    min-height: 100vh;
  }

`;

export default GlobalStyle;
