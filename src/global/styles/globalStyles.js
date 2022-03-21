import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    :visited {
      color: inherit;
    }
    :hover {
      color: ${(props) => props.theme.colors.focus};
    }
  }

  body {
    background: ${(props) => props.theme.colors.Background.primary};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    color: ${(props) => props.theme.colors.text.primary};
  }

  main {
    padding-top: 3vh;
    width: 100vw;
  }
`;

export default GlobalStyles;
