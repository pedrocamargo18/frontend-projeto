import styled from "styled-components";

export const FeaturedMoviesContainer = styled.div`
  display: flex;
  align-items: flex-start;
  margin: 2rem 4rem;
`;

export const FeaturedMovieCard = styled.div`
  width: 100%;
  max-width: 1500px;
  position: relative;
  overflow: hidden;
  border-radius: 2rem;
`;

export const FeaturedMovieImage = styled.img`
  width: 100%;
  height: 750px;
  object-fit: cover;
  border-radius: 1.5rem;
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

export const MovieInfoContainer = styled.div`
    position: absolute;
  bottom: 10px; 
  left: 10px; 
  color: white;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left; 
`;

export const HighlightedText = styled.h3`
  background-color: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  color: white;
  max-width: 150px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem;
  border-radius: 4px;
  z-index: 3;
`;

export const FeaturedMovieTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  padding: 0.5rem;
  z-index: 3;
`;

export const MovieDetailsContainer = styled.div`
  color: white;
  display: flex;
  gap: 0.5rem;
  margin: 0;
`;

export const MovieDetail = styled.div`
  margin: 0;
  font-size: 1rem;
  display: flex;
  align-items: center;
  color: rgba(180, 180, 180, 1);

  &.rating {
    font-size: 1.5rem;
    font-weight: semibold;
    color: white;
    &::before {
      content: "★";
      color: gold;
      margin-right: 0.5rem;
    }
  }

  &.others {
    &::before {
      content: "•";
      color: rgba(180, 180, 180, 1);
      font-weight: bold;

      margin-right: 0.5rem;
    }
  }
`;

export const MovieRating = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  top: 10px;
  left: 10px;
  font-weight: 600;
  font-size: 1.2rem;
  color: white;
  z-index: 3;
  padding: 0.3rem 0.5rem;
  &::before {
    content: "★";
    color: gold;
    margin-right: 0.5rem;
  }
`;

export const MovieDescription = styled.p`
  color: white;
  padding: 0.5rem;
  max-width: 100%;
`;

export const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 40%;
  margin-left: 1rem;
`;

export const MovieCard = styled.div`
  flex: 1;
  margin: 0.5rem 0;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const MovieImage = styled.img`
  width: 100%;
  height: 230px;
  object-fit: cover;
  border-radius: 1.5rem;
`;

export const MovieTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
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

const mediaQueries = {
  small: "@media (max-width: 600px)",
  medium: "@media (max-width: 900px)",
};

export const MovieInfoContainerResponsive = styled(MovieInfoContainer)`
  ${mediaQueries.small} {
    bottom: 10px;
    left: 5px;
  }

  ${mediaQueries.medium} {
    bottom: 15px;
    left: 10px;
  }
`;

export const FeaturedMovieTitleResponsive = styled(FeaturedMovieTitle)`
  ${mediaQueries.small} {
    font-size: 1.5rem;
  }
`;
