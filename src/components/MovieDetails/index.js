import React from "react";
import {
  MovieImage,
  GenresContainer,
  Genre,
  ContainerMovieCard,
  GradientShadow,
  MovieTitle,
  MovieContainer,
  TrailerButton,
  MovieInfoContainer,
  MovieOverview,
  MovieCrewContainer,
  CrewMember,
  OverviewAndCrewContainer,
  CrewColumn,
  MovieHeader,
  RatingContainer,
  RatingStar,
  MovieSubtitle,
} from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const MovieDetails = ({ movie }) => {
  // Verifique se o movie está definido
  if (!movie) {
    return null; // Retorna nulo se movie não estiver disponível
  }

  const writers = movie.credits.crew.filter(
    (member) => member.job === "Writer" || member.job === "Screenplay"
  );
  const directors = movie.credits.crew.filter(
    (member) => member.job === "Director"
  );

  // Formatar a popularidade
  const popularityString = movie.popularity.toString().replace('.', '');
  const popularity = parseInt(popularityString);
  console.log(popularity)
  let formattedPopularity;
  if (popularity >= 1000000) {
    formattedPopularity = `${(popularity / 1000000).toFixed(1).replace('.', ',')} mi`;
  } else if (popularity >= 1000) {
    formattedPopularity = `${Math.floor(popularity / 1000)} mil`;
  } else {
    formattedPopularity = popularity.toString(); // Caso seja menor que 1000
  }

  const topActors = movie.credits.cast.slice(0, 5);
  console.log(movie)
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
          <TrailerButton>Assistir ao Trailer <FontAwesomeIcon icon={faPlay} /></TrailerButton>
        </MovieContainer>
      </ContainerMovieCard>
      <GenresContainer>
        {movie.genres &&
          movie.genres.map((genre) => (
            <Genre key={genre.id}>{genre.name}</Genre>
          ))}
      </GenresContainer>
      <MovieHeader>
        <MovieTitle>{movie.title}</MovieTitle>
        <RatingContainer>
          <RatingStar>⭐</RatingStar>
          <span>{movie.vote_average.toFixed(1)}</span>
        </RatingContainer>
        <RatingContainer className="popularity">
          <span>{formattedPopularity}</span>
        </RatingContainer>
      </MovieHeader>{" "}
      <MovieSubtitle>
        {movie.runtime} min • {movie.age_rating ? movie.age_rating : "N/A"} •{" "}
        {new Date(movie.release_date).getFullYear()}
      </MovieSubtitle>
      <OverviewAndCrewContainer>
        <MovieInfoContainer>
          <MovieOverview>{movie.overview}</MovieOverview>
        </MovieInfoContainer>
        {/* Roteirista e Diretor */}
        <MovieCrewContainer>
          <CrewColumn>
            {directors.length > 0 && (
              <CrewMember>
                <h3>Direção</h3>{" "}
                {directors.map((director) => director.name).join(", ")}
              </CrewMember>
            )}
          </CrewColumn>
          <CrewColumn>
            {writers.length > 0 && (
              <CrewMember>
                <h3>Roteiristas</h3>{" "}
                {writers.map((writer) => writer.name).join(", ")}
              </CrewMember>
            )}
          </CrewColumn>
          <CrewColumn>
            {topActors.length > 0 && (
              <CrewMember>
                <h3>Artistas</h3>{" "}
                {topActors.map((actor) => actor.name).join(", ")}
              </CrewMember>
            )}
          </CrewColumn>
        </MovieCrewContainer>
      </OverviewAndCrewContainer>
    </div>
  );
};

export default MovieDetails;
