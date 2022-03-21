/* eslint-disable no-template-curly-in-string */
/* eslint-disable no-shadow */
import styled from 'styled-components';

export const ListNavigation = styled.div`
  display: flex;
 justify-content: center;
  border-bottom: none ;
  position: relative;

  &:after {
    content:'';
    position: absolute;
    top: 0;
    bottom: 0;
    border-bottom: 0.1px solid ${(props) => props.theme.colors.text.links};
    width: 100vw;
    z-index: -1;
  }
`;

export const ListSelector = styled.input`
  outline-style: none;
  padding: 5px 20px;
  border: none;
  color: ${(props) => props.theme.colors.text.primary};
  background: none;
  font-size: 1.3rem;
  // eslint-disable-next-line no-template-curly-in-string
  border-bottom: 3px inset  ${(props) => (props.isSelected === props.value ? props.theme.colors.selected : 'none;')};

  :hover{
    cursor: pointer;
    border-bottom: 3px inset  ${(props) => (props.isSelected === props.value ? props.theme.colors.selected : props.theme.colors.text.links)};
  }
`;
