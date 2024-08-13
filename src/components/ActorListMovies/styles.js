import styled from "styled-components";

export const ActorsSection = styled.div`
  padding-top: 2rem;
  margin: 4rem;
`;

export const ActorsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const ActorsSectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  border-left: 3px solid #fff;
  padding-left: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }
`;

export const ActorListContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ActorList = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.5rem; 
  }
`;

export const ActorCard = styled.div`
  position: relative;
  width: 20%;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 25%; 
  }

  @media (max-width: 768px) {
    width: 45%; 
  }

  @media (max-width: 480px) {
    width: 100%; 
  }
`;

export const ActorImage = styled.img`
  width: 90%;
  height: 15em;
  object-fit: cover;
  border-radius: 1.5rem;
`;

export const ActorName = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  right: 0;
  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }
`;

export const ActorAge = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  color: white;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const ArrowButton = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1); /* Adiciona um efeito de hover */
  }
`;

export const LeftArrowButton = styled(ArrowButton)``;
export const RightArrowButton = styled(ArrowButton)``;
