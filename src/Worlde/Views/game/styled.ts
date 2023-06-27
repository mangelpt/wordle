import styled from "styled-components";

export const Container = styled.section<{ theme: "light" | "dark" }>`
  width: 100%;
  height: 100vh;
  padding: 20px;
  background-color: ${({theme}) => theme === "dark" && "var(--background2)"};
`;

export const GameContainer = styled.div`
  width: 638px;
  height: 900px;
  margin: 20px auto;
`;