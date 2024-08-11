// src/components/MovieDetails.js
import React from "react";
import { MovieImage, GenresContainer, Genre } from "./styles";
import { ContainerMovieCard } from "./styles";
import { GradientShadow } from "./styles";
import { MovieTitle } from "./styles";
import { MovieContainer } from "./styles";
import { TrailerButton } from "./styles";

const MovieDetails = ({ movie }) => {
  // Verifique se o movie está definido
  if (!movie) {
    return null; // Retorna nulo se movie não estiver disponível
  }

  return (
    <div>
      <ContainerMovieCard>
        {movie.poster_path && (
          <MovieImage
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            alt={movie.title}
          />
        )}
        <GradientShadow />
        <MovieContainer>
          <TrailerButton>Assistir ao Trailer</TrailerButton>
        </MovieContainer>
      </ContainerMovieCard>

      <GenresContainer>
        {movie.genres &&
          movie.genres.map((genre) => (
            <Genre key={genre.id}>{genre.name}</Genre>
          ))}
      </GenresContainer>
    </div>
  );
};

export default MovieDetails;
