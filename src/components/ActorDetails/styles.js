import styled from "styled-components";

export const ActorDetailSection = styled.div`
  margin: 2rem;
  color: white;
`;

export const ActorDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const MoviesListContainer = styled.div`
  flex: 1;
  margin-top: 2rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const MovieItem = styled.div`
  flex: 1;
  margin: 0.5rem;
  cursor: pointer;
`;

export const ActorInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
`;

export const ActorImage = styled.img`
  width: 400px;
  height: 350px;
  border-radius: 1.5rem;
  object-fit: cover;
  margin-bottom: 1rem;
  margin-top: 2rem;
  border: 4px solid rgba(58, 58, 58, 1);

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const ActorBio = styled.div`
  font-size: 0.9rem;
  text-align: justify;
  line-height: 1.5;
  color: #ccc;
  margin-top: 2rem;
  margin-right: 2rem;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const MovieInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    width: auto;
  }
`;

export const MovieImage = styled.img`
  width: 100px;
  height: 150px;
  border-radius: 0.5rem;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 80px;
    height: 120px;
  }
`;

export const MovieTitle = styled.h3`
  font-size: 12px;
  font-weight: bold;
  color: #fff;
  text-align: left;
  margin: 0.5rem 0.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100px;
  white-space: nowrap;
`;

export const MovieRating = styled.span`
  font-size: 0.9rem;
  color: #fff;
  text-align: left;
  margin: 0rem 0.5rem;
`;

export const MovieCharacter = styled.span`
  font-size: 0.9rem;
  color: #fff;
  text-align: left;
  margin: 0rem 0.5rem;
`;

export const MovieYear = styled.span`
  font-size: 0.9rem;
  color: #fff;
  text-align: left;
  margin: 0rem 0.5rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #fff;

  button {
    background-color: #333;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    cursor: pointer;

    &:disabled {
      background-color: #555;
      cursor: not-allowed;
    }

    &:hover:not(:disabled) {
      background-color: #444;
    }
  }
`;

export const MovieInfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
`;

export const SubTitle = styled.h2`
  border-left: 3px solid #fff;
  padding-left: 1rem;
  color: white;
  font-size: 2rem;
  margin-bottom: 1rem;
`;

export const ActorNameStyled = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin: 0;
`;

export const ActorOriginStyled = styled.p`
  font-size: 1rem;
  color: lightgray;
  margin: 0;
`;

export const ActorBirthdayStyled = styled.p`
  font-size: 1rem;
  color: lightgray;
  margin: 0;
`;

export const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: lightblue;
  cursor: pointer;
  text-decoration: underline;

  &:hover {
    color: blue;
  }
`;
