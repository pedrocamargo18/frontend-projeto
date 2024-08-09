import styled from "styled-components";

export const Container = styled.div`
  flex-direction: column;
  padding: 2rem;

  h1 {
    text-align: center;
    margin: 3rem 0;
  }
`;

export const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`;

export const Movie = styled.li`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px; /* Espaçamento entre os filmes */
  margin-top: 20px; /* Espaçamento superior */

  img {
    width: 250px;
    height:125px
    border-radius: 1rem;
    margin-bottom: 2rem;
  }

  span{
    font-weight: semibold;
    font-size: 100%;
    color: white;
  }
`;
