import styled from "styled-components";

export const SimilarSection = styled.div`
  padding-top: 2rem;
  margin: 2rem;
`;

export const SimilarSectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  margin: 1rem;
`;

export const SimilarSectionTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  border-left: 3px solid #fff;
  padding-left: 1rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const MovieListContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
`;

export const MovieList = styled.div`
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  width: 100%;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

export const MovieCard = styled.div`
  position: relative;
  width: 24%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  margin: 0rem 0.5rem;

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
  bottom: 30px;
  left: 10px;
  right: 0;
  color: white;
  font-weight: bold;
  text-align: left;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
