import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 5px;
  margin-left: 10px;
  cursor: pointer;
  background-color: ${({bgColor})=> (bgColor || "white")};
`;

export const Nome = styled.span`
  margin-right: 10px;
  margin-left: 10px;
  font-weight: bold;
  font-size: 0.9em;
`;
