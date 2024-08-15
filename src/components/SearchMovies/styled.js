import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const InputSearch = styled.input`
  padding: 10px 40px;
  border: 1px solid #ccc;
  border-radius: 99px;
  width: 100%; /* Ajusta para 100% do contêiner */
  max-width: 350px; /* Largura máxima */
  background-color: rgba(25, 25, 25, 1);
  font-size: 16px;
  color: white;
`;

export const Icon = styled.button`
  position: absolute;
  right: 50px;
  padding: 5px 10px;
  border: none;
  background: none;
  color: #ccc;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const FilterButton = styled.button`
  padding: 5px 10px;
  border: none;
  background: none;
  color: #ccc;
  cursor: pointer;
  &:hover {
    color: white;
  }
`;

export const FilterDropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: #333;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  z-index: 10;
  label {
    color: white;
    margin-right: 10px;
  }
  input {
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 100px;
  }
`;

export const ResultsContainer = styled.div`
  position: absolute;
  top: 100px;
  left: 0;
  width: 100%; /* Ajusta para 100% da largura do contêiner */
  max-height: 400px;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1000;
  padding: 10px;
  border-radius: 10px;
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start; /* Alinhamento para a esquerda */
  margin-bottom: 10px;
  color: white;
  width: 100%; /* Largura do item */
  
  img {
    margin-right: 10px;
    border-radius: 5px;
    max-width: 70px; /* Ajusta a largura máxima da imagem */
    height: auto; /* Mantém a proporção da imagem */
  }

  h4 {
    margin: 0;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
`;

export const ReleaseYearInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px; 
  margin-left: 10px; 
  background-color: rgba(25, 25, 25, 1);
  color: white;

  &::placeholder {
    color: #ccc; 
  }

  &:focus {
    border-color: #007bff; 
    outline: none; 
  }
`;
