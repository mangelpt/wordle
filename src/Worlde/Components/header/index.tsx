import {Container, SwitchContainer, Title, CustomButton, Check, SwitchCustom, ButtonsContainer} from "./styled.ts";
import {ChartIcon, QuestionIcon} from "../../../assets/Icons/icons.tsx";
import {useContext, useEffect, useState} from "react";
import {UserPreferencesContext} from "../../context/userPreferencesContext.ts";


export const Header = () => {
    const [isToggled, setIsToggled] = useState(true);
    const {ThemeContextType,setUserTheme} = useContext(UserPreferencesContext)

  useEffect(()=>{
      if (isToggled){
          setUserTheme("light")
      }else {
          setUserTheme("dark")
      }
  },[isToggled])

    console.log(ThemeContextType)


    return <Container>
        <CustomButton>
            <QuestionIcon/>
        </CustomButton>
        <Title>WORDLE</Title>
        <ButtonsContainer>
            <CustomButton>
                <ChartIcon/>
            </CustomButton>
            <SwitchContainer>
                <Check checked={isToggled} onChange={() => setIsToggled(!isToggled)}></Check>
                <SwitchCustom className={"switch"}></SwitchCustom>
            </SwitchContainer>
        </ButtonsContainer>
    </Container>
}