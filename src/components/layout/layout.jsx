import React from 'react';
import Header from '../header/header';
import MainContainer from './styles';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
    </>
  );
}

export default Layout;
