import React, { useState, useEffect, useRef } from "react";
import useMovieStore from "../../store";
import {
  InputSearch,
  Icon,
  SearchInputContainer,
  ResultsContainer,
  ResultItem,
  FilterButton,
  FilterDropdown,
  Overlay,
  ReleaseYearInput,
} from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchMovies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const { fetchMovies, searchResults = [], loading, error } = useMovieStore();
  const [showFilter, setShowFilter] = useState(false);
  const [resultsVisible, setResultsVisible] = useState(false);
  const resultsRef = useRef(null);
  const overlayRef = useRef(null);

  const handleSearch = async () => {
    if (!searchTerm) return;
    const isYearValid = releaseYear ? /^\d{4}$/.test(releaseYear) : true;

    if (isYearValid) {
      await fetchMovies(searchTerm, releaseYear);
    } else {
      await fetchMovies(searchTerm);
    }
    setResultsVisible(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleOverlayClick = () => {
    setShowFilter(false);
  };

  const handleClickOutside = (event) => {
    if (
      resultsRef.current &&
      !resultsRef.current.contains(event.target) &&
      overlayRef.current &&
      !overlayRef.current.contains(event.target)
    ) {
      setResultsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {searchResults.length > 0 && <Overlay onClick={handleOverlayClick} />}
      <SearchInputContainer>
        <InputSearch
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Pesquisar filmes..."
        />
        <Icon onClick={handleSearch} disabled={loading}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Icon>
        <FilterButton onClick={toggleFilter}>
          <FontAwesomeIcon icon={faFilter} />
        </FilterButton>
        {resultsVisible && (
        <>
          <Overlay ref={overlayRef} onClick={() => setResultsVisible(false)} />
          <ResultsContainer ref={resultsRef}>
            <ResultItem>
              <img src="URL_DA_IMAGEM" alt="Filme" />
              <h4>Título do Filme</h4>
            </ResultItem>
          </ResultsContainer>
        </>
      )}
      </SearchInputContainer>

      {searchResults.length > 0 && (
        <ResultsContainer  ref={resultsRef}>
          {searchResults.map((movie) => (
            <ResultItem key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
              />
              <div>
                <h4>{movie.title}</h4>
                <p>{movie.release_date}</p>
              </div>
            </ResultItem>
          ))}
        </ResultsContainer>
      )}
      {error && <div>{error}</div>}
    </div>
  );
};

export default SearchMovies;
