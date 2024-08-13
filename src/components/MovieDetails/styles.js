import styled from "styled-components";

export const MovieImage = styled.img`
  width: 100%;
  height: 500px;
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
  font-size: 3rem;
  font-weight: bold;
  z-index: 3;
  margin-left: 3rem;
  color: white;
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
  flex-wrap: wrap; 
  gap: 0.5rem; 
  margin: 0.5rem 3rem; 
`;

export const Genre = styled.span`
  background-color: transparent;
  color: #ffffff78; 
  padding: 0.3rem 1rem; 
  border-radius: 20px; 
  font-size: 1rem; 
  border: 1px solid;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Ajusta o tamanho da fonte em telas menores */
  }
`;

export const MovieInfoContainer = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 1rem;
  text-align: left;
  padding: 0 1rem;
`;
export const OverviewAndCrewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 2rem 1rem;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MovieOverview = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 1.5rem;
  color: white;
  text-align: left;
`;

export const MovieCrewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 1rem;
`;

export const CrewColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CrewMember = styled.div`
  flex: 1;
  margin: 0.5rem;
  text-align: left;
  color: white;
  padding-left: 1rem;
  border-left: 3px solid #fff;
  justify-content: space-between;
`;

export const CrewRole = styled.span`
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: white;
  padding-right: 0.5rem;
  border-right: 1px solid #fff;

  &.popularity{
  padding-right: 0;
  border-right: none;
  font-size: 1rem;
  margin-left: 5px;
  }
`;

export const RatingStar = styled.span`
  margin-left: 1rem;
  font-size: 1.5rem;
  `;

export const MovieSubtitle = styled.div`
  font-size: 1.2rem;
  color: #ffffff78; 
  margin-bottom: 1rem;
  margin-left: 3rem;
  
  @media (max-width: 768px) {
    font-size: 1rem; /* Ajuste o tamanho da fonte em telas menores */
  }
`;

export const MovieHeader = styled.div`
  display: flex;
  align-items: center;
`;