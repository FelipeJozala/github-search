import React from 'react';
import errorAnimation from '../../assets/animations/errorAnimation.json';
import { AnimationContainer, StyledLottie, Text } from './styles';

function SearchError() {
  return (
    <AnimationContainer>
      <Text>Desculpe, ocorreu um erro na sua pesquisa..</Text>
      <StyledLottie
        loop
        animationData={errorAnimation}
        play
      />
    </AnimationContainer>
  );
}

export default SearchError;
