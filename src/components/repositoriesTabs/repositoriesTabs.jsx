/* eslint-disable react/prop-types */
import React from 'react';
import { ListNavigation, ListSelector } from './styles';

function RepositoriesTabs({ handleListToShow }) {
  return (
    <ListNavigation onClickCapture={handleListToShow}>
      <ListSelector type="button" value="Repositories" />
      <ListSelector type="button" value="Starred" />
    </ListNavigation>
  );
}

export default RepositoriesTabs;
