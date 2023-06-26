import styled from "styled-components";

export const Container = styled.div`
  height: 400px;
  width: 400px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  gap: 11px;
`;

export const Cells = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 5px;
  background: rgba(147, 155, 159, 0.30);
  text-transform: uppercase;
`;

export const Column = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  gap: 11px;
`;