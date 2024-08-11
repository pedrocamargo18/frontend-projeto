import React from "react";
import {
  ActorsSection,
  ActorsSectionHeader,
  ActorsSectionTitle,
  ActorListContainer,
  ActorList,
  ActorCard,
  ActorImage,
  ActorName,
  ActorAge,
  NavigationContainer,
  LeftArrowButton,
  RightArrowButton,
} from "./styles"; // Ajuste o caminho conforme necessário
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MainCastSlider = ({ title, actors, movieImage, onTrailerClick }) => {
  const handleScroll = (direction) => {
    const scrollAmount =
      document.querySelector(".actor-list")?.clientWidth || 0;
    const currentPosition =
      document.querySelector(".actor-list")?.scrollLeft || 0;
    const newPosition =
      direction === "left"
        ? currentPosition - scrollAmount
        : currentPosition + scrollAmount;
    document
      .querySelector(".actor-list")
      ?.scrollTo({ left: newPosition, behavior: "smooth" });
  };

  return (
    <ActorsSection>
      <ActorsSectionHeader>
        <ActorsSectionTitle>{title}</ActorsSectionTitle>
        <NavigationContainer>
          <LeftArrowButton onClick={() => handleScroll("left")}>
            {" "}
            <FontAwesomeIcon icon={faChevronLeft} />
          </LeftArrowButton>
          <RightArrowButton onClick={() => handleScroll("right")}>
            <FontAwesomeIcon icon={faChevronRight} />
          </RightArrowButton>
        </NavigationContainer>
      </ActorsSectionHeader>
      <ActorListContainer>
        <ActorList className="actor-list">
          {actors.map((actor) => (
            <ActorCard key={actor.id}>
              <ActorImage
                src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
                alt={actor.name}
              />
              <ActorName>{actor.name}</ActorName>
              <ActorAge>{actor.character}</ActorAge>{" "}
              {/* Exibe o personagem abaixo do nome */}
            </ActorCard>
          ))}
        </ActorList>
      </ActorListContainer>
    </ActorsSection>
  );
};

export default MainCastSlider;
