import styled from "styled-components";


export const HeaderContainer = styled.header`
  width: 100%; 
  height: 96px; 
  padding: 24px 0 0 0; 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  opacity: 1; 
  margin: 0 auto; 
  background-color: rgba(25, 25, 25);
`;


export const Icon = styled.span`
  left: 10px;
  padding: 1rem;
  border: none;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);

  &:hover {
    background-color: rgba(255, 255, 255);
    color: black;
  }

  @media (max-width: 600px) {
    left: 5px;
  }
`;