import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../global/theme/themes';
import GithubProvider from '../../provider/githubProvider';
import GlobalStyles from '../../global/styles/globalStyles';
import Header from '../header/header';
import MainContainer from './styles';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <GithubProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <MainContainer>{children}</MainContainer>
      </ThemeProvider>
    </GithubProvider>
  );
}

export default Layout;
