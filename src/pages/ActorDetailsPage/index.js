// src/pages/ActorDetailsPage.js
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useMovieStore from "../../store";
import Header from "../../components/Header";
import ActorDetails from "../../components/ActorDetails";

const ActorDetailsPage = () => {
  const { id } = useParams();
  const { fetchActorDetails, actorDetails } = useMovieStore();

  useEffect(() => {
    fetchActorDetails(id);
  }, [fetchActorDetails, id]);


  if (!actorDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <ActorDetails actorDetails={actorDetails} />r
    </div>
  );
};

export default ActorDetailsPage;
