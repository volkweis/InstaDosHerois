import styled from 'styled-components';

export const Container = styled.div``;

export const Image = styled.img`
  border-radius: 50%;
  width: ${({width})=>(width || "100px")};
  height: ${({height})=>(height || "100px")};
`;
