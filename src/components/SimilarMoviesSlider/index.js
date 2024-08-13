// src/components/SimilarMoviesSlider.js
import React from "react";
import {
  MovieCard,
  MovieTitle,
  MovieImage,
  MovieList,
  MovieListContainer,
  LeftArrowButton,
  RightArrowButton,
  NavigationContainer,
  SimilarSectionHeader,
  SimilarSectionTitle,
  SimilarSection,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const SimilarMoviesSlider = ({ movies, title }) => {
  const handleScroll = (direction) => {
    const scrollAmount =
      document.querySelector(".movie-list-similar")?.clientWidth || 0;
    const currentPosition =
      document.querySelector(".movie-list-similar")?.scrollLeft || 0;
    const newPosition =
      direction === "left"
        ? currentPosition - scrollAmount
        : currentPosition + scrollAmount;
    document
      .querySelector(".movie-list-similar")
      ?.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  if (!movies || !Array.isArray(movies) || movies.length === 0) {
    return <div>Nenhum filme semelhante encontrado.</div>; // Mensagem quando não há filmes
  }
  return (
    <SimilarSection>
      <SimilarSectionHeader>
        <SimilarSectionTitle>{title}</SimilarSectionTitle>
        <NavigationContainer>
          <LeftArrowButton onClick={() => handleScroll("left")}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </LeftArrowButton>
          <RightArrowButton onClick={() => handleScroll("right")}>
            <FontAwesomeIcon icon={faChevronRight} />
          </RightArrowButton>
        </NavigationContainer>
      </SimilarSectionHeader>
      <MovieListContainer>
        <MovieList className="movie-list-similar">
          {movies.map((movie) => (
            <MovieCard key={movie.id}>
              <MovieImage
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTitle>{movie.title}</MovieTitle>
            </MovieCard>
          ))}
        </MovieList>
      </MovieListContainer>
    </SimilarSection>
  );
};

export default SimilarMoviesSlider;
