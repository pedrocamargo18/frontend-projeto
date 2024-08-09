import React, { useEffect } from 'react';
import useMovieStore from '../../store'; // Ajuste o caminho conforme necessário
import styled from 'styled-components';

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px; /* Espaçamento entre os filmes */
  margin-top: 20px; /* Espaçamento superior */
`;

const MovieCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
`;

const FeaturedMovies = () => {
  const { movies, fetchMovies, loading, error } = useMovieStore();

  useEffect(() => {
    fetchMovies(); 
  }, [fetchMovies]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <MoviesGrid>
      {movies.map(movie => (
        <MovieCard key={movie.imdbID}>
          <img src={movie.Poster} alt={movie.Title} style={{ width: '100%', height: 'auto' }} />
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </MovieCard>
      ))}
    </MoviesGrid>
  );
};

export default FeaturedMovies;
