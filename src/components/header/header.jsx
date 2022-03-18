import React, { useState } from 'react';
import useGithub from '../../hooks/useGithub';
import {
  HeaderContainer, SearchBar, SearchButton, SearchContainer,
} from './styles';

function Header() {
  const [userToSearch, setUserToSearch] = useState();
  const { getUser } = useGithub();

  const handleTextInput = (e) => {
    const { value } = e.target;
    setUserToSearch(value);
  };

  const handleSearch = () => {
    getUser(userToSearch);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSearch();
    }
  };

  return (
    <HeaderContainer>
      <SearchContainer>
        <SearchBar type="text" placeholder="O Username do Github que deseja pesquisar" onChange={handleTextInput} onKeyDown={handleKeyDown} />
        <SearchButton type="button" onClick={handleSearch}>Buscar</SearchButton>
      </SearchContainer>
    </HeaderContainer>
  );
}

export default Header;
