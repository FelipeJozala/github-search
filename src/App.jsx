// import logo from './logo.svg';
import React from 'react';
import Layout from './components/layout/layout';
import NoSearch from './components/noSearch/noSearch';
import Profile from './components/profile/profile';
import RepositoriesList from './components/repositoriesList/repositoriesList';
import SearchError from './components/SearchError/searchError';
import useGithub from './hooks/useGithub';

function App() {
  const { githubState } = useGithub();

  if (githubState.hasError.length !== 0) {
    return (
      <Layout>
        <SearchError />
      </Layout>
    );
  }

  return (
    <Layout>
      { !githubState?.hasUser ? <NoSearch />
        : (
          <>
            <Profile />
            <RepositoriesList />
          </>
        )}
    </Layout>
  );
}

export default App;
