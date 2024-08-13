import React from "react";
import {
  MovieCard,
  MovieTitle,
  MovieImage,
  MovieList,
  MovieListContainer,
  NavigationContainer,
  LeftArrowButton,
  RightArrowButton,
  RecommendedSection,
  RecommendedSectionHeader,
  RecommendedSectionTitle,
  TrailerButton
} from "./styles"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const RecommendedMovies = ({ title = "Filmes Recomendados", movies = [], loading = false, imagePath = "" }) => {
  const handleScroll = (direction) => {
    const scrollAmount = document.querySelector('.movie-list')?.clientWidth || 0;
    const currentPosition = document.querySelector('.movie-list')?.scrollLeft || 0;
    const newPosition = direction === 'left' ? currentPosition - scrollAmount : currentPosition + scrollAmount;
    document.querySelector('.movie-list')?.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  const navigate = useNavigate()
  const handleViewTrailer = (id) => {
    navigate(`/movie/${id}`)

  }
  
  return (
    <RecommendedSection>
      <RecommendedSectionHeader>
        <RecommendedSectionTitle>{title}</RecommendedSectionTitle>
        <NavigationContainer>
          <LeftArrowButton onClick={() => handleScroll('left')}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </LeftArrowButton>
          <RightArrowButton onClick={() => handleScroll('right')}>
            <FontAwesomeIcon icon={faChevronRight} />
          </RightArrowButton>
        </NavigationContainer>
      </RecommendedSectionHeader>
      <MovieListContainer>
        <MovieList className="movie-list">
          {loading ? (
            <p>Carregando...</p>
          ) : movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id}>
                <MovieImage src={`${imagePath}${movie.poster_path}`} alt={movie.title} />
                <MovieTitle>{movie.title}</MovieTitle>
                {/* <TrailerButton onClick={() => handleViewTrailer(movie.id)}>Assista o trailer</TrailerButton> */}
              </MovieCard>
            ))
          ) : (
            <p>Nenhum filme encontrado.</p>
          )}
        </MovieList>
      </MovieListContainer>
    </RecommendedSection>
  );
};

export default RecommendedMovies;
