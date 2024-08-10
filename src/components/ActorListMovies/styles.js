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

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduz o tamanho da fonte em telas menores */
  }
`;

export const ActorListContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ActorList = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;
  scroll-behavior: smooth;
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.5rem; /* Reduz o espaço entre os atores em telas menores */
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

  @media (max-width: 1024px) {
    width: 25%; /* Ajusta a largura do card em telas médias */
  }

  @media (max-width: 768px) {
    width: 45%; /* Ajusta a largura do card em telas menores */
  }

  @media (max-width: 480px) {
    width: 100%; /* O card ocupa toda a largura em telas pequenas */
  }
`;

export const ActorImage = styled.img`
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 1.5rem;
`;

export const ActorName = styled.div`
  position: absolute;
  bottom: 30px;
  left: 0;
  right: 0;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduz o tamanho da fonte do nome em telas menores */
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
    font-size: 0.9rem; /* Reduz o tamanho da fonte da idade em telas menores */
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
