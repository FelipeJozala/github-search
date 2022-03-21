import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme/themes';
import GithubProvider from './provider/githubProvider';
import GlobalStyles from './global/styles/globalStyles';
import App from './App';

function Providers() {
  return (
    <GithubProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
    </GithubProvider>
  );
}

export default Providers;
