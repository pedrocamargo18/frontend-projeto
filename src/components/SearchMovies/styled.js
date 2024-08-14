import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 400px;
`;

export const InputSearch = styled.input`
  padding: 10px 40px 10px 40px;
  border: 1px solid #ccc;
  border-radius: 99px;
  width: 100%;
  background-color: rgba(25, 25, 25, 1);
  font-size: 16px;
  color: white;

  @media (max-width: 600px) {
    font-size: 14px;
    padding: 8px 30px;
  }
`;

export const Icon = styled.span`
  position: absolute;
  left: 10px;
  padding: 5px;
  border: none;
  border-radius: 99px;
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


export const ResultsContainer = styled.div`
  margin-top: 10px;
  background-color: rgba(25, 25, 25, 0.9);
  border-radius: 8px;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;

export const ResultItem = styled.div`
  padding: 10px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
