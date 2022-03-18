import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 150px;
  width: 350px;
  border: 0.1px solid ${(props) => props.theme.colors.text.primary};
  border-radius: 10px;
  padding: 20px;
  white-space: nowrap;                  
  overflow: hidden;
  text-overflow: ellipsis;
  position: relative;
`;

export const CardTitle = styled.h4`
  color: ${(props) => props.theme.colors.focus};
  margin-bottom: 10px;
  white-space: nowrap;                  
  overflow: hidden;
  text-overflow: ellipsis;
  

  :hover {
    text-decoration: underline;
  }
`;

export const PublicSticker = styled.span`
  padding: 5px;
  border: 0.1px solid ${(props) => props.theme.colors.text.primary};
  border-radius: 8px;
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.text.primary};
  margin-bottom: 10px;
  position: absolute;
  bottom: 10px;
  right: 10px;

`;
