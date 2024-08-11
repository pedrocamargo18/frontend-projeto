// src/pages/MovieDetailsPage.js
import React, { useEffect } from "react";
import MovieDetails from "../../components/MovieDetails";
import Header from "../../components/Header";
import MainCastSlider from "../../components/MainCastSlider";
import useMovieStore from "../../store";
import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { fetchMovieDetails, movieDetails, credits } = useMovieStore();

  useEffect(() => {
    fetchMovieDetails(id);
  }, [fetchMovieDetails, id]);

  if (!movieDetails) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <Header />
      <MovieDetails movie={movieDetails} />
      {credits && credits.cast && <MainCastSlider title="Elenco principal" actors={credits.cast} />}
    </div>
  );
};

export default MovieDetailsPage;
