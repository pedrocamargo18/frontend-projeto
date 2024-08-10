import React from "react";
import {
  FeaturedMoviesContainer,
  FeaturedMovieCard,
  FeaturedMovieImage,
  FeaturedMovieTitle,
  MovieList,
  MovieCard,
  MovieImage,
  MovieTitle,
  MovieDescription,
  MovieDetailsContainer,
  MovieDetail,
  MovieInfoContainer,
  GradientShadow,
  TrailerButton,
  HighlightedText,
  MovieRating,
} from "./styles";
import { FaFire } from "react-icons/fa";

const FeaturedMovies = ({ movies,title }) => {
  if (!movies || movies.length === 0) return <p>Nenhum filme encontrado.</p>;

  // Ordena os filmes por nota e pega os 4 com maior nota
  const topMovies = movies
    .sort((a, b) => b.vote_average - a.vote_average)
    .slice(0, 4);

  console.log(topMovies);
  return (
    <FeaturedMoviesContainer>
      <FeaturedMovieCard>
        <FeaturedMovieImage
          src={`https://image.tmdb.org/t/p/original/${topMovies[0].poster_path}`}
        />
        <GradientShadow />
        <MovieInfoContainer>
          <HighlightedText>
            <FaFire /> Em Destaque
          </HighlightedText>
          <FeaturedMovieTitle>{topMovies[0].title}</FeaturedMovieTitle>
          <MovieDetailsContainer>
            <MovieDetail className="rating">
              {topMovies[0].vote_average.toFixed(1)} |
            </MovieDetail>
            <MovieDetail>{topMovies[0].popularity} </MovieDetail>
            <MovieDetail className="others">
              {Array.isArray(topMovies[0].genres)
                ? topMovies[0].genres.map((genre) => genre.name).join(", ")
                : "N/A"}
            </MovieDetail>
            <MovieDetail className="others">
              {new Date(topMovies[0].release_date).getFullYear()}
            </MovieDetail>
          </MovieDetailsContainer>
          <MovieDescription>{topMovies[0].overview}</MovieDescription>
          <TrailerButton>Ver Trailer</TrailerButton>
        </MovieInfoContainer>
      </FeaturedMovieCard>
            
      <MovieList>
        <h2>{title}</h2>
        {topMovies.slice(1).map((movie) => (
          <MovieCard key={movie.id}>
              <GradientShadow />
            <MovieImage
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
              <MovieRating>{movie.vote_average.toFixed(1)}</MovieRating>
            <MovieInfoContainer className="movie-side-info-container">
              <MovieTitle>{movie.title}</MovieTitle>
              <TrailerButton>Ver Trailer</TrailerButton>
            </MovieInfoContainer>
          </MovieCard>
        ))}
      </MovieList>
    </FeaturedMoviesContainer>
  );
};

export default FeaturedMovies;
