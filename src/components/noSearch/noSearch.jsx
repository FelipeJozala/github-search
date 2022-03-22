import React from 'react';
import NoSearchAnimation from '../../assets/animations/NoSearchAnimation.json';
import { AnimationContainer, StyledLottie, Text } from './styles';

function NoSearch() {
  return (
    <AnimationContainer>
      <Text>Pesquise um usuário para começar!</Text>
      <StyledLottie
        loop
        animationData={NoSearchAnimation}
        play
      />
    </AnimationContainer>
  );
}

export default NoSearch;
