import styled from 'styled-components';
import Lottie from 'react-lottie-player';

export const AnimationContainer = styled.div`
  text-align: center;
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: fit-content;
`;

export const Text = styled.p`
  font-size: 1.6rem;
`;

export const StyledLottie = styled(Lottie)`
  max-width: 100%;
  max-height: 80%;
`;
