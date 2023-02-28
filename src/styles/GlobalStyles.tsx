import { createGlobalStyle } from "styled-components";
import CustomTheme from "./types";

const GlobalStyles = createGlobalStyle<{ theme: CustomTheme }>`

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    color: #FFF;
    padding: 1.5rem;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3{
    padding: 0;
    margin: 0;
  }

  ol, ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-family: inherit;
  }
`;

export default GlobalStyles;
