/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ListNavigation, ListSelector } from './styles';

function RepositoriesTabs({ handleListToShow }) {
  const [selectedTab, setSelectedTab] = useState('Repositories');

  const handleSelectedTab = (e) => {
    const { value } = e.target;
    setSelectedTab(value);
  };
  return (
    <ListNavigation onClickCapture={handleListToShow}>
      <ListSelector type="button" value="Repositories" isSelected={selectedTab} onClick={handleSelectedTab} />
      <ListSelector type="button" value="Starred" isSelected={selectedTab} onClick={handleSelectedTab} />
    </ListNavigation>
  );
}

export default RepositoriesTabs;
