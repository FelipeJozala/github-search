import React from 'react';
import noRepositoriesAnimation from '../../assets/animations/noRepositoriesAnimation.json';
import { AnimationContainer, StyledLottie, Text } from './styles';

function NoRepositories() {
  return (
    <AnimationContainer>
      <Text>Este usuário ainda não tem nenhum repositório nessa categoria!</Text>
      <StyledLottie
        loop
        animationData={noRepositoriesAnimation}
        play
      />
    </AnimationContainer>
  );
}

export default NoRepositories;
