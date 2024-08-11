import styled from "styled-components";

export const ActorsSection = styled.div`
  padding-top: 2rem;
  margin: 0;
`;

export const ActorsSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  margin: 1rem;

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
  margin: 1rem
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
  width: 90%;
  height: 20rem;
  object-fit: cover;
  border-radius: 1.5rem;
`;

export const ActorName = styled.div`
  position: absolute;
  bottom: 30px;
  left: 20px;
  right: 0;
  color: white;
  font-weight: bold;
  text-align: left; 
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem; /* Reduz o tamanho da fonte do nome em telas menores */
  }
`;

export const ActorAge = styled.div`
  position: absolute;
  bottom: 10px;
  left:20px;
  right: 0;
  color: white;
  font-size: 1rem;
  text-align: left; 

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

export const MovieImage = styled.img`
  width: 100%;
  height: auto; /* Ajusta a altura automaticamente */
  border-radius: 1.5rem; /* Para um visual mais suave */
`;

export const TrailerButton = styled.button`
  position: absolute;
  bottom: 10px; /* Ajusta a posição do botão em relação à imagem */
  left: 50%;
  transform: translateX(-50%); /* Centraliza o botão */
  background-color: rgba(255, 255, 255, 0.8); /* Fundo semi-transparente */
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  z-index: 1; /* Garante que o botão fique acima da imagem */

  &:hover {
    background-color: #0056b3; /* Muda a cor ao passar o mouse */
    color: white; /* Muda a cor do texto ao passar o mouse */
  }
`;
