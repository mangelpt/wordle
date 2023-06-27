import styled from 'styled-components'
import {CardProps} from "./types.ts";

export const Container = styled.div<CardProps>`
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 5px;
  text-rendering: optimizeLegibility;
  border: ${({border}) => border ? "1px solid var(--black)" : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  text-align: center;
  font-size: 35px;
  font-family: Roboto;
  font-weight: 800;
  background-color:rgba(147, 155, 159, 0.30);
  background-color: ${({theme}) => theme === "dark" && "var(----background2)"};
  background-color: ${({correct}) => correct && "var(--green)"};
  background-color: ${({incorrect}) => incorrect && "var(--orange)"};
  background-color: ${({empty}) => empty && "var(--gray)"};
  text-transform: ${({correct}) => correct && "uppercase"};
`