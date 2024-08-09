import React, { useEffect } from "react";
import useMovieStore from "../../store";
import Header from "../../components/Header";
import FeaturedMovies from "../../components/FeaturedMovies";
import { Container, Movie, MovieList } from "./styles";

const Home = () => {
  const { movies, loading, fetchTopRatedMovies, error } = useMovieStore(); // Consumindo o store de Zustand
  const imagePath = "https://image.tmdb.org/t/p/w200/";

  useEffect(() => {
    fetchTopRatedMovies();
  }, [fetchTopRatedMovies]);

  console.log(fetchTopRatedMovies)
  return (
    <div>
      <Header />
      {/* <FeaturedMovies /> */}

      {error && <div>{error}</div>}

      <Container>
        <h1>Top Filmes</h1>
        <MovieList>
          {loading && <p>Loading...</p>}

          {movies.length > 0
            ? movies.map((movie) => (
                <Movie key={movie.id}>
                  <span>{movie.title}</span>
                  <img
                    src={`${imagePath}${movie.poster_path}`}
                  />
                </Movie>
              ))
            : !loading && <p>No movies found.</p>}
        </MovieList>
      </Container>
    </div>
  );
};

export default Home;
