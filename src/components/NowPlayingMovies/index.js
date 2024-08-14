import React from "react";
import {
  MovieCard,
  MovieTitle,
  MovieImage,
  MovieList,
  MovieListContainer,
  TrailerButton,
  LeftArrowButton,
  RightArrowButton,
  NavigationContainer,
  MoviesSection,
  MoviesSectionHeader,
  MoviesSectionTitle,
  GradientShadow,
} from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const NowPlayingMovies = ({ title, movies, loading, imagePath }) => {

  const navigate = useNavigate()

  const handleScroll = (direction) => {
    const scrollAmount = document.querySelector('.movie-list')?.clientWidth || 0;
    const currentPosition = document.querySelector('.movie-list')?.scrollLeft || 0;
    const newPosition = direction === 'left' ? currentPosition - scrollAmount : currentPosition + scrollAmount;
    document.querySelector('.movie-list')?.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  const handleViewTrailer = (id) => {
    navigate(`/movie/${id}`)
  };


  return (
    <MoviesSection>
      <MoviesSectionHeader>
        <MoviesSectionTitle>{title}</MoviesSectionTitle>
        <NavigationContainer>
        <LeftArrowButton onClick={() => handleScroll('left')}> <FontAwesomeIcon icon={faChevronLeft} /></LeftArrowButton>
        <RightArrowButton onClick={() => handleScroll('right')}><FontAwesomeIcon icon={faChevronRight} /></RightArrowButton>
        </NavigationContainer>
      </MoviesSectionHeader>
      <MovieListContainer>
        <MovieList className="movie-list">
          {loading && <p>Loading...</p>}
          {movies.length > 0
            ? movies.map((movie) => (
              <MovieCard key={movie.id}>
                  <MovieImage src={`${imagePath}${movie.poster_path}`} />
                  <GradientShadow />
                  <MovieTitle>
                    <h2>{movie.title}</h2>
                  </MovieTitle>
                    <TrailerButton onClick={() => handleViewTrailer(movie.id)}>Assista o trailer</TrailerButton>
                </MovieCard>
              ))
              : !loading && <p>Nenhum filme encontrado.</p>}
        </MovieList>
      </MovieListContainer>
    </MoviesSection>
  );
};

export default NowPlayingMovies;
