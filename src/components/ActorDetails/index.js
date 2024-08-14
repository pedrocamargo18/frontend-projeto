import React, { useState } from "react";
import {
  ActorImage,
  ActorBio,
  ActorDetailSection,
  ActorInfoContainer,
  MoviesListContainer,
  MovieItem,
  ActorDetailsContainer,
  MovieImage,
  MovieTitle,
  MovieRating,
  MovieInfoContainer,
  PaginationContainer,
  MovieCharacter,
  MovieYear,
  MovieInfoColumn,
  SubTitle,
  ActorNameStyled,
  ActorOriginStyled,
  ActorBirthdayStyled,
  ReadMoreButton,
} from "./styles";

const ActorDetails = ({ actorDetails }) => {
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  const movies = actorDetails.movie_credits?.cast || [];
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 15;

  // Calcular o índice dos filmes
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = movies.slice(indexOfFirstMovie, indexOfLastMovie);

  const totalPages = Math.ceil(movies.length / moviesPerPage);

  // Funções de navegação de página
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  //calcular idade
  const calculateAge = (birthDate) => {
    const birthYear = new Date(birthDate).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  };

  const [showFullBio, setShowFullBio] = useState(false);
  // Formatar a data de nascimento
  const formattedBirthday = new Date(actorDetails.birthday).toLocaleDateString(
    "pt-BR",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  );

  return (
    <ActorDetailSection>
      <ActorDetailsContainer>
        <MoviesListContainer>
          <SubTitle>Filmes e Séries</SubTitle>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
          >
            {currentMovies.length > 0 ? (
              currentMovies.map((movie) => (
                <MovieItem key={movie.id}>
                  <MovieInfoContainer>
                    {movie.backdrop_path && (
                      <MovieImage
                        src={`${imagePath}${movie.backdrop_path}`}
                        alt={movie.title}
                      />
                    )}
                    <MovieInfoColumn>
                      <MovieTitle>{movie.title}</MovieTitle>
                      <MovieRating>
                        ⭐ {movie.vote_average.toFixed(1)}
                      </MovieRating>
                      <MovieCharacter>{movie.character}</MovieCharacter>
                      <MovieYear>
                        {new Date(movie.release_date).getFullYear()}
                      </MovieYear>
                    </MovieInfoColumn>
                  </MovieInfoContainer>
                </MovieItem>
              ))
            ) : (
              <p>Nenhum filme encontrado.</p>
            )}
          </div>

          {/* Paginação */}
          <PaginationContainer>
            <button onClick={prevPage} disabled={currentPage === 1}>
              Anterior
            </button>
            <span>
              Página {currentPage} de {totalPages}
            </span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Próximo
            </button>
          </PaginationContainer>
        </MoviesListContainer>
        <ActorInfoContainer>
          <ActorImage src={`${imagePath}${actorDetails.profile_path}`} />
          <ActorNameStyled>{actorDetails.name}</ActorNameStyled>
          <ActorOriginStyled>
            Origem: <br/> {actorDetails.place_of_birth}
          </ActorOriginStyled>
          <ActorBirthdayStyled>
            Data de Nascimento:<br />{formattedBirthday} ({calculateAge(actorDetails.birthday)} anos)
          </ActorBirthdayStyled>
          <ActorBio>
            {" "}
            {showFullBio
              ? actorDetails.biography
              : actorDetails.biography.split("\n").slice(0, 2).join("\n") +
                "..."}
            <ReadMoreButton onClick={() => setShowFullBio(!showFullBio)}>
              {showFullBio ? "Ver menos" : "Ver mais"}
            </ReadMoreButton>
          </ActorBio>
        </ActorInfoContainer>
      </ActorDetailsContainer>
    </ActorDetailSection>
  );
};

export default ActorDetails;
