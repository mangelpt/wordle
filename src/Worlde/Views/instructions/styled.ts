import styled from "styled-components";

interface Props {
    uppercase?: boolean
    bold?: boolean
    fontSize?: string
}

export const Container = styled.div`
  width: 546px;
  height: 900px;
  background-color: var(--background1);
  margin: 20px auto;
  border: 1px solid var(--gray);
  border-radius: 4px;
  padding-left: 42px;
`;

export const Wording = styled.span<Props>`
  color: var(--black);
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
  &:hover{
    background-color: forestgreen;
  }
`;
