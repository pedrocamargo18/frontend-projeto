import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const GradientShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  z-index: 0;
`;

export const MoviesSection = styled.div`
  padding-top: 2rem;
  margin: 4rem;
`;

export const MoviesSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const MoviesSectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MovieListContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MovieList = styled.div`
  display: flex;
  gap: 1rem;
  overflow: hidden;
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

  /* Responsividade */
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
  left: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  text-align: left;
  color: white;
  border-radius: 0.5rem 0.5rem 0 0;
  margin: 0;
  width: 90%;
`;

export const TrailerButton = styled.button`
  margin-top: 0.5rem;
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
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
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const LeftArrowButton = styled(ArrowButton)``;

export const RightArrowButton = styled(ArrowButton)``;
