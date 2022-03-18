// import logo from './logo.svg';
import React from 'react';
import Layout from './components/layout/layout';
import Profile from './components/profile/profile';
import RepositoriesList from './components/repositoriesList/repositoriesList';

function App() {
  return (
    <Layout>
      <Profile />
      <RepositoriesList />
    </Layout>
  );
}

export default App;
