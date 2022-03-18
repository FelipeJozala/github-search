import styled from 'styled-components';

export const ProfileContainer = styled.div`

width: 100%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;

@media (min-width: 600px) {
  flex-direction: row;
}
`;

export const ImgContainer = styled.div`

max-width: 250px;
height: auto;
border-radius: 50%;

`;

export const Img = styled.img`

width: 100%;
height: auto;
border-radius: 50%;

`;

export const DataContainer = styled.div`

@media (min-width: 600px) {
  margin-left: 15px;
}

`;

export const ProfileNameRow = styled.div`
display: flex;
flex-direction: column;
`;

export const ProfileRow = styled.div`
margin-top: 3px;
display: flex;
flex-wrap: wrap;
align-items: center;

span {
margin-left: 5px;
}
`;

export const ProfileStatus = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-right: 10px;

`;

export const UserName = styled.h1`
font-size: 1.8rem;
line-height: 1.25;
font-weight: bold;
color: ${(props) => props.theme.colors.text.primary};
`;

export const UserLogin = styled.h2`
font-size: 1.2rem;
line-height: 1.25;
color: ${(props) => props.theme.colors.text.links};
`;
