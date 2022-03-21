import React, { useEffect, useState } from 'react';
import useGithub from '../../hooks/useGithub';
import NoRepositories from '../noRepositories/noRepositories';
import RepositorieCard from '../repositorieCard/repositorieCard';
import RepositoriesTabs from '../repositoriesTabs/repositoriesTabs';
import {
  ListContainer, RepositoriesGrid,
} from './styles';

function RepositoriesList() {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [reposList, setReposList] = useState([]);
  useEffect(() => {
    if (githubState.user.login) {
      getUserRepos(githubState.user.login);
      getUserStarred(githubState.user.login);
    }
  }, [githubState.user.login]);

  useEffect(() => {
    setReposList(githubState.repositories);
  }, [githubState.repositories]);

  const handleListToShow = (e) => {
    const { value } = e.target;
    switch (value) {
      case 'Repositories':
        return setReposList(githubState.repositories);
      case 'Starred':
        return setReposList(githubState.starred);
      default:
        return setReposList(githubState.repositories);
    }
  };

  return (
    <ListContainer>
      <RepositoriesTabs handleListToShow={handleListToShow} />
      { reposList.length !== 0 ? (
        <RepositoriesGrid>
          {reposList?.map((repositorie) => (
            <RepositorieCard
              key={repositorie.id}
              repositorie={repositorie}
            />
          ))}
        </RepositoriesGrid>
      )
        : (<NoRepositories />)}
    </ListContainer>
  );
}

export default RepositoriesList;
