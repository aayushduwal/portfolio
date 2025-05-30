import { createGlobalStyle } from "styled-components";
import colors from "./colors";

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    padding: 0;
    background: ${colors.navy};
    color: ${colors.lightestSlate};
    font-family: 'Fira Mono', 'Roboto Mono', 'Menlo', monospace;
    min-height: 100vh;
    box-sizing: border-box;
  }
  *, *::before, *::after {
    box-sizing: inherit;
  }
  a {
    color: ${colors.green};
    text-decoration: none;
  }
`;

export default GlobalStyle;
