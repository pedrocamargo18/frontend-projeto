import React, { useState } from "react";
import useMovieStore from "../../store";
import { InputSearch,Icon, SearchInputContainer } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState(""); // armazena o termo de pesquisa
  const { fetchMovies, loading, error } = useMovieStore(); // Consumindo o Zustand

  const handleSearch = () => {
    if (searchTerm.trim()) {
      fetchMovies(searchTerm);
    }
  };

  return (
    <SearchInputContainer>
      <InputSearch
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder= " Pesquisar..."
      />
      <Icon onClick={handleSearch} disabled={loading}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </Icon>
      {error && <div>{error}</div>}
    </SearchInputContainer>
  );
};

export default SearchMovies;
