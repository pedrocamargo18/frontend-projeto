import React, { useState } from "react";
import useMovieStore from "../../store";
import { InputSearch,Icon, SearchInputContainer, ResultsContainer, ResultItem } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState(""); // armazena o termo de pesquisa
  const { fetchMovies, loading, error } = useMovieStore(); // Consumindo o Zustand
  const [results, setResults] = useState([]);

  const handleSearch = async() => {
    if (!searchTerm) {
      setResults([]);
      return;
    }

    try {
      const movies = await fetchMovies(searchTerm);
      setResults(movies);
    } catch (error) {
      console.error(error);
      setResults([]); 
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
      <ResultsContainer>
        {results.map((movie) => (
          <ResultItem key={movie.id}>{movie.title}</ResultItem>
        ))}
      </ResultsContainer>
      {error && <div>{error}</div>}
    </SearchInputContainer>
  );
};

export default SearchMovies;
