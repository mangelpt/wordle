import styled from "styled-components";

export const Container = styled.div`
  background-color: #6AAA64;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CustomButton = styled.button`
  height: fit-content;
  border: none;
  background-color: transparent;

  &:hover {
    background-color: var(--gray);
  }
`;

export const Title = styled.span`
  color: #202537;
  text-align: center;
  font-size: 40px;
  font-family: Roboto;
  font-weight: 600;
  letter-spacing: 3px;
`;


export const ButtonsContainer = styled.div`
  background-color: darkorange;
  display: flex;
  align-items: center;
`;
export const SwitchContainer = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  
  input[type="checkbox"]:checked + .switch::before {
    transform: translateX(25px);
    background: linear-gradient(#FFBF24, #F4924B);
  }

  input[type="checkbox"]:checked + .switch {
    background: linear-gradient(#66FFED, #FFEEB2);
  }

`;

export const Check = styled.input.attrs({type: 'checkbox'})`
  display: none;
  
`;

export const SwitchCustom = styled.span`
  position: absolute;
  cursor: pointer;
  background: linear-gradient(#2B4485, #AFCAFF);
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    border-radius: 50%;
    transition: transform 0.3s ease;
    background: linear-gradient(#C8D7FF, #DCF0FF);
  }
`;

