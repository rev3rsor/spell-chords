import { createGlobalStyle } from "styled-components";

import { ROOT_FONT_SIZE } from "$utils/pxToRem";

const GlobalStyle = createGlobalStyle`
  body, html {
    font-size: ${ROOT_FONT_SIZE}px;
    height: 100%;
    margin: 0;
    width: 100%;
  }

  body {
    font-family: 'Inter', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
  }

  #root {
    height: 100%;
    margin: 0;
    position: relative;
    width: 100%;
  }
`;

export default GlobalStyle;
