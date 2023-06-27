import styled from "styled-components";

export const Container = styled.div <{ theme: "light" | "dark" }>`
  width: 540px;
  height: 190px;
  border-radius: 15px;
  background-color: rgba(218, 220, 224, 0.30);
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: auto;
  background-color: ${({theme}) => theme==="dark" && "rgba(218, 220, 224, 0.03)"};
`;

export const ButtonCustom = styled.button<{theme:"light"| "dark"}>`
  color: #56575E;
  color: ${({theme}) => theme === "dark" && "var(--white)"};
  text-align: center;
  font-size: 18px;
  font-family: Roboto;
  font-weight: 600;
  border-radius: 5px;
  background-color: #D3D6DA;
  min-width: 44.665px;
  height: 51.046px;
  background-color: ${({theme}) => theme === "dark" && "#565F7E"};

  &:nth-of-type(11) {
    margin-left: 25px;
  } 
`;
