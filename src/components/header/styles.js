import styled from 'styled-components';

export const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background: ${(props) => props.theme.colors.Background.secundary};
width: 100vw;
padding: 2vh;
margin-bottom: 2vh;
`;
export const SearchContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
width: 90%;
`;

export const SearchButton = styled.button`
outline-style: none;
margin-left: -1px;
padding: 5px;
border: 0.1px solid ${(props) => props.theme.colors.secundary};
border-radius: 0 8px 8px 0;
color: ${(props) => props.theme.colors.text.primary};
background: ${(props) => props.theme.colors.Background.primary};

:hover{
cursor: pointer;
background: ${(props) => props.theme.colors.Background.secundary};
border-color:${(props) => props.theme.colors.focus};
}
`;

export const SearchBar = styled.input`
outline-style: none;
font-size: 1rem;
letter-spacing: 1.9px;
padding:10px;
flex-grow:2;
border: 0.1px solid ${(props) => props.theme.colors.secundary};
border-radius: 8px 0 0 8px;
color: ${(props) => props.theme.colors.text.primary};
background: ${(props) => props.theme.colors.Background.primary};

:focus {
border-color:${(props) => props.theme.colors.focus};

}

&:focus ~ ${SearchButton} {
border-color:${(props) => props.theme.colors.focus};
}
`;
