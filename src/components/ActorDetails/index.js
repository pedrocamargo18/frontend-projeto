import React from "react";
import { ActorImage, ActorBio, ActorDetailSection } from "./styles";

const ActorDetails = ({ actorDetails }) => {
  const imagePath = "https://image.tmdb.org/t/p/original/";

  return (
    <ActorDetailSection>
      <h1>{actorDetails.name}</h1>
      <ActorImage src={`${imagePath}${actorDetails.profile_path}`} />
      <ActorBio>{actorDetails.biography}</ActorBio>
    </ActorDetailSection>
  );
};

export default ActorDetails;
