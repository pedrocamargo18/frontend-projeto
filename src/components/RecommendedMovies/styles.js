import styled from "styled-components";

export const RecommendedSection = styled.div`
  padding-top: 2rem;
  margin: 4rem;
`;

export const RecommendedSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const RecommendedSectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  border-left: 3px solid #fff;
  padding-left: 1rem;
`;

export const MovieListContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MovieList = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 100%;

  /* Responsividade */
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;


export const MovieCard = styled.div`
  position: relative;
  width: 25%;
  flex-shrink: 0;
  display: flex;
  align-items: flex-end;
  margin: 0.5rem 0;

  @media (max-width: 1024px) {
    width: 30%;
  }

  @media (max-width: 768px) {
    width: 45%;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;


export const MovieImage = styled.img`
  width: 100%;
  height: 15rem;
  object-fit: cover;
  border-radius: 1.5rem;
`;

export const MovieTitle = styled.div`
  position: absolute;
  bottom: 20%;
  left: 5px;
  font-size: 1.5rem;
  padding: 1rem;
  text-align: left;
  color: white;
  border-radius: 0.5rem 0.5rem 0 0;
  margin: 0;
  width: 90%;
  z-index: 2;
`;

export const NavigationContainer = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;

  svg {
    color: white;
    font-size: 1.5rem;
    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
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
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const LeftArrowButton = styled(ArrowButton)``;

export const RightArrowButton = styled(ArrowButton)``;


export const TrailerButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: 5%;
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

export const MovieImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const GradientShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  z-index: 1;
  border-radius: 1.5rem;
`;