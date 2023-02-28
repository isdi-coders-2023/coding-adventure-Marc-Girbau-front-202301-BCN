import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    color: #fff;
    background-color: ${(props) => props.theme.colors.primary};
    font-family: ${(props) => props.theme.fonts.primary};
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

  button, input {
    font-family: inherit;
    font-size:inherit;
    border: none;
  }

  button{
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyles;
