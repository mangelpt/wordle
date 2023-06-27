import styled from "styled-components";

export const Container = styled.div <{ theme: "light" | "dark" }>`
  width: 446px;
  height: 480px;
  border: 1px solid var(--gray);
  border-radius: 4px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  position: absolute;
  top: 180px;
  left: calc(50% - 180px);
  bottom: 20px;
  background-color: var(--background1);
  background-color: ${({theme}) => theme==="dark" && "#262B3C"};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.span<{ theme: "light" | "dark" }>`
  color: #000;
  text-align: center;
  font-size: 35px;
  font-family: Roboto;
  font-weight: 800;
  color: ${({theme}) => theme==="dark" && "var(--white)"};
`;

export const PlaysContainer = styled.section<{ theme: "light" | "dark" }>`
  display: flex;
  justify-content: space-between;
  width: 70%;
  color: ${({theme}) => theme==="dark" && "var(--white)"};
`;


export const Plays = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Wins = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlaysWinsTitle = styled.div<{ theme: "light" | "dark" }>`
  color: #000;
  text-align: center;
  font-size: 21px;
  font-family: Roboto;
  color: ${({theme}) => theme==="dark" && "var(--white)"};
`;

export const PlaysWinsNumber = styled.span<{ theme: "light" | "dark" }>`
  color: #000;
  text-align: center;
  font-size: 35px;
  font-family: Roboto;
  font-weight: 800;
  color: ${({theme}) => theme==="dark" && "var(--white)"};
`

export const ExpectedNextWordContainer = styled.div<{ theme: "light" | "dark" }>`
  display: flex;
  flex-direction: column;
  gap: 15px;
  color: ${({theme}) => theme==="dark" && "var(--white)"};
`;

export const ExpectedWord = styled.div<{ theme: "light" | "dark" }>`
  color: var(--black);
  font-size: 19px;
  font-family: Roboto;
  color: ${({theme}) => theme==="dark" && "var(--white)"};
  span {
    font-weight: 800;
    text-transform: uppercase;
  }
`;


export const NextWord = styled.span<{ theme: "light" | "dark" }>`
  color: #000;
  font-size: 19px;
  font-family: Roboto;
  text-transform: uppercase;
  color: ${({theme}) => theme==="dark" && "var(--white)"};
`;

export const RemainingTime = styled.span<{ theme: "light" | "dark" }>`
  color: #000;
  font-size: 24px;
  font-family: Roboto;
  font-weight: 700;
  align-self: center;
  color: ${({theme}) => theme==="dark" && "var(--white)"};
`;
export const NextWordContainer = styled.span`
  display: flex;
  flex-direction: column;
`;
export const ButtonAccept = styled.button`
  display: flex;
  width: 256px;
  height: 44px;
  background-color: var(--green);
  color: var(--white);
  text-align: center;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 800;
  border: none;
  justify-content: center;
  border-radius: 4px;

  &:hover {
    background-color: #599a45;
  }
`;