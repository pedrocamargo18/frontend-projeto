import styled from "styled-components";

export const MovieImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;
  border-radius: 1.5rem; 
`;
export const ContainerMovieCard = styled.div`
  width: 100%;
  max-width: 1800px;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  margin: 2rem;
`;

export const GradientShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
  z-index: 1;
  border-radius: 1.5rem;
`;
export const MovieContainer = styled.div`
    position: absolute;
  bottom: 10px; 
  left: 10px; 
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left; 
  margin: 2rem;
`;
export const MovieTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  z-index: 3;
`;

export const TrailerButton = styled.button`
  margin-top: 0.5rem;
  margin-bottom: 0.25rem;
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  max-width: 250px;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  font-weight: semibold;
  border-radius: 0.7rem;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #0056b3;
  }
`;


export const GenresContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os gêneros se ajustem em múltiplas linhas se necessário */
  gap: 0.5rem; /* Espaço entre os gêneros */
  margin: 1rem 2rem; /* Margem acima e abaixo */
`;

export const Genre = styled.span`
  background-color: rgba(
    255,
    255,
    255,
    0.1
  ); /* Cor de fundo semi-transparente */
  color: white; /* Cor do texto */
  padding: 0.5rem 1rem; /* Espaçamento interno */
  border-radius: 20px; /* Bordas arredondadas */
  font-size: 1rem; /* Tamanho da fonte */

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Ajusta o tamanho da fonte em telas menores */
  }
`;

