import styled from "styled-components";

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const InputSearch = styled.input`
  padding: 10px 40px 10px 40px;
  border: 1px solid #ccc;
  border-radius: 99px;
  width: 350px;
  background-color:rgba(25, 25, 25, 1);
  font-size: 16px;
  color: White
`;

export const Icon = styled.span`
  position: absolute;
  left: 5px;
  padding:5px 10px 5px 10px;
  border: none;
  border-radius: 99px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1); 

  &:hover {
  background-color: rgba(255, 255, 255);
  color: black 
  }
`;
