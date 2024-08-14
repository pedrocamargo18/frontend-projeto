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
  SubTitle,
} from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FaFire } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FeaturedMovies = ({ movies, title }) => {
  const navigate = useNavigate()
  if (!movies || movies.length === 0) return <p>Nenhum filme encontrado.</p>;

  // Ordena os filmes por nota e pega os 4 com maior nota
  const topMovies = movies
  .sort((a, b) => b.vote_average - a.vote_average)
  .slice(0, 4);
  
    // Formatar a popularidade
    const popularityString = topMovies[0].popularity.toString().replace('.', '');
    const popularity = parseInt(popularityString);
    let formattedPopularity;
    if (popularity >= 1000000) {
      formattedPopularity = `${(popularity / 1000000).toFixed(1).replace('.', ',')} mi`;
    } else if (popularity >= 1000) {
      formattedPopularity = `${Math.floor(popularity / 1000)} mil`;
    } else {
      formattedPopularity = popularity.toString(); // Caso seja menor que 1000
    }
  

  const handleViewTrailer = (id) => {
    navigate(`/movie/${id}`);
  };

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
            <MovieDetail>{formattedPopularity} </MovieDetail>
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
          <TrailerButton   onClick={() => handleViewTrailer(topMovies[0].id)}>
            Assistir ao trailer <FontAwesomeIcon icon={faPlay} />
          </TrailerButton>
        </MovieInfoContainer>
      </FeaturedMovieCard>

      <MovieList>
        <SubTitle>{title}</SubTitle>
        {topMovies.slice(1).map((movie) => (
          <MovieCard key={movie.id}>
            <GradientShadow />
            <MovieImage
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            />
            <MovieRating>{movie.vote_average.toFixed(1)}</MovieRating>
            <MovieInfoContainer className="movie-side-info-container">
              <MovieTitle>{movie.title}</MovieTitle>
              <TrailerButton onClick={() => handleViewTrailer(movie.id)}>
                Assistir ao trailer <FontAwesomeIcon icon={faPlay} />
              </TrailerButton>
            </MovieInfoContainer>
          </MovieCard>
        ))}
      </MovieList>
    </FeaturedMoviesContainer>
  );
};

export default FeaturedMovies;
