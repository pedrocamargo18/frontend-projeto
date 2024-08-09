import React from 'react';
import styled from 'styled-components';
import SearchMovies from '../SearchMovies';

const HeaderContainer = styled.header`
  width: 100%; 
  height: 96px; 
  padding: 24px 0 0 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  opacity: 1; 
  margin: 0 auto; 
  background-color: rgba(35, 35, 35, 1);
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Logo</h1>
      <SearchMovies />
    </HeaderContainer>
  );
};

export default Header;
