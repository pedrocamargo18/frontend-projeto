import React, { useEffect } from "react";
import useMovieStore from "../../store";
import Header from "../../components/Header";
import NowPlayingMovies from "../../components/NowPlayingMovies";
import ActorListMovies from "../../components/ActorListMovies";
import RecommendedMovies from "../../components/RecommendedMovies";
import FeaturedMovies from "../../components/FeaturedMovies";
const Home = () => {
  const {
    movies,
    loading,
    actors,
    loadingActors,
    fetchTopRatedMovies,
    fetchPopularActors,
    fetchRecommendedMovies,
    recommendedMovies,
    loadingRecommended,
    error,
  } = useMovieStore();
  const imagePath = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetchTopRatedMovies();
    fetchPopularActors();
    fetchRecommendedMovies();
  }, [fetchTopRatedMovies, fetchRecommendedMovies, fetchPopularActors]);

  return (
    <div>
      <Header />

      {error && <div>{error}</div>}
      <FeaturedMovies movies={movies} title="Destaques também" />
      <NowPlayingMovies
        title="Últimos Lançamentos"
        movies={movies}
        loading={loading}
        imagePath={imagePath}
      />
      <RecommendedMovies
        title="Recomendados"
        movies={recommendedMovies}
        loading={loadingRecommended}
        imagePath={imagePath}
      />

      <ActorListMovies
        title="Celebridades"
        actors={actors}
        loading={loadingActors}
        imagePath={imagePath}
      />
    </div>
  );
};

export default Home;
