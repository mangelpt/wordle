import styled from "styled-components";

interface Props {
    uppercase?: boolean
    bold?: boolean
    fontSize?: string
    theme?: "light" | "dark"
}

export const Container = styled.div<{ theme: "light" | "dark" }>`
  width: 546px;
  height: 880px;
  background-color: var(--background1);
  margin: 20px auto;
  border: 1px solid var(--gray);
  border-radius: 4px;
  padding-left: 42px;
  box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  position:  absolute;
  top: 10px;
  left: calc(40% - 180px);
  bottom: 70px;
  background-color: ${({theme}) => theme==="dark" && "#262B3C"};
`;

export const Wording = styled.span<Props>`
  color: var(--black);
  color: ${({theme}) => theme==="dark" && "var(--white)"};
  text-align: center;
  font-size: 19px;
  font-family: Roboto;
  text-transform: ${({uppercase}) => uppercase && "uppercase"};
  font-weight: ${({bold}) => bold && "bold"};
  font-size: ${({fontSize}) => fontSize && fontSize};
`


export const DescriptionContainer = styled.section`
  margin: 32px 26px 16px 0;
  gap: 15px;
  height: 147px;
  display: flex;
  flex-direction: column;
  align-items: start;

  span:last-of-type {
    margin-right: 70px;
  }
`;
export const WordCardContainer = styled.div`
  display: flex;
  gap: 11px;
  margin: 19px 0;
`
export const Title = styled.span`
  color: var(--black);
  text-align: center;
  font-size: 35px;
  font-family: Roboto;
  font-weight: 800;
  display: flex;
  justify-content: center;
  margin-right: 40px;
  padding-top: 30px;
  color: ${({theme}) => theme==="dark" && "var(--white)"};
`;

export const WordingContainer = styled.div`
margin-top: 20px;
  &:last-of-type{
    text-align: center;
  }
`;


export const Button = styled.button`
  display: flex;
  width: 256px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  margin: 40px auto 0 ;
  background-color: var(--green);
 outline: none;
  border: none;
  color: var(--white);
  text-align: center;
  font-size: 28px;
  font-family: Roboto;
  font-weight: 800;
  &:hover{
    background-color: forestgreen;
  }
`;
export const Cells = styled.div<{
    correct?:boolean;
    incorrect?:boolean;
    empty?:boolean;
    border?:boolean
}>`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  text-rendering: optimizeLegibility;
  border: ${({border}) => border ? "1px solid var(--black)" : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--black);
  text-align: center;
  font-size: 35px;
  font-family: Roboto;
  font-weight: 800;
  background-color: var(--white);
  background-color: ${({correct}) => correct && "var(--green)"};
  background-color: ${({incorrect}) => incorrect && "var(--orange)"};
  background-color: ${({empty}) => empty && "var(--gray)"};
  text-transform: ${({correct}) => correct && "uppercase"};
`