/* eslint-disable camelcase */
import React from 'react';
import propTypes from 'prop-types';
import { CardContainer, CardTitle, PublicSticker } from './styles';

function RepositorieCard({ repositorie }) {
  const {
    name, description, visibility, html_url,
  } = repositorie;

  return (
    <CardContainer>
      <a href={html_url} target="_blank" rel="noopener noreferrer">
        <CardTitle>{name}</CardTitle>
      </a>
      <span>{description}</span>
      <PublicSticker>{visibility}</PublicSticker>
    </CardContainer>
  );
}
RepositorieCard.propTypes = {
  repositorie: propTypes.object.isRequired,
};
export default RepositorieCard;
