import React from 'react';
import useMovieStore from '../../store';
import Header from '../../components/Header';
import FeaturedMovies from '../../components/FeaturedMovies';

const Home = () => {
  const { movies, loading, error } = useMovieStore(); // Consumindo o store de Zustand

  return (
    <div>
      <Header /> 
      <FeaturedMovies />

      {error && <div>{error}</div>} 

      <div>
        {loading && <p>Loading...</p>} 

        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </div>
          ))
        ) : (
          !loading && <p>No movies found.</p> 
        )}
      </div>
    </div>
  );
};

export default Home;
