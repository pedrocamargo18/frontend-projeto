import React from "react";
import SearchMovies from "../SearchMovies";
import { HeaderContainer } from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <SearchMovies />
    </HeaderContainer>
  );
};

export default Header;
