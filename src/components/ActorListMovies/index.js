import React from "react";
import {
    ActorCard,
    ActorName,
    ActorImage,
    ActorList,
    ActorListContainer,
    NavigationContainer,
    LeftArrowButton,
    RightArrowButton,
    ActorsSection,
    ActorsSectionHeader,
    ActorsSectionTitle,
} from "./styles";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ActorListMovies = ({ title, actors = [], loading, imagePath }) => {
  const handleScroll = (direction) => {
    const scrollAmount = document.querySelector('.actor-list')?.clientWidth || 0;
    const currentPosition = document.querySelector('.actor-list')?.scrollLeft || 0;
    const newPosition = direction === 'left' ? currentPosition - scrollAmount : currentPosition + scrollAmount;
    document.querySelector('.actor-list')?.scrollTo({ left: newPosition, behavior: 'smooth' });
  };

  return (
    <ActorsSection>
      <ActorsSectionHeader>
        <ActorsSectionTitle>{title}</ActorsSectionTitle>
        <NavigationContainer>
          <LeftArrowButton onClick={() => handleScroll('left')}> <FontAwesomeIcon icon={faChevronLeft} /></LeftArrowButton>
          <RightArrowButton onClick={() => handleScroll('right')}><FontAwesomeIcon icon={faChevronRight} /></RightArrowButton>
        </NavigationContainer>
      </ActorsSectionHeader>
      <ActorListContainer>
        <ActorList className="actor-list">
          {loading && <p>Loading...</p>}
          {actors.length > 0
            ? (actors.map((actor) => (
                <ActorCard key={actor.id}>
                  <ActorImage src={`${imagePath}${actor.profile_path}`} />
                  <ActorName>{actor.name}, {actor.age}</ActorName>
                </ActorCard>
              )))
            : !loading && <p>Nenhum ator encontrado.</p>}
        </ActorList>
      </ActorListContainer>
    </ActorsSection>
  );
};

export default ActorListMovies;
