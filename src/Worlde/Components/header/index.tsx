import {Container, SwitchContainer, Title, CustomButton, Check, SwitchCustom, ButtonsContainer} from "./styled.ts";
import {ChartIcon, QuestionIcon} from "../../../assets/Icons/icons.tsx";
import React, {useContext, useEffect, useState} from "react";
import {UserPreferencesContext} from "../../context/userPreferencesContext.ts";


interface headerProps {
    handleModal: React.Dispatch<React.SetStateAction<boolean>>
    handleModalStats: React.Dispatch<React.SetStateAction<boolean>>
}

export const Header = ({handleModal, handleModalStats}: headerProps) => {
    const [isToggled, setIsToggled] = useState(true);
    const {setUserTheme,ThemeContextType} = useContext(UserPreferencesContext)

    useEffect(() => {
        if (isToggled) {
            setUserTheme("light")
        } else {
            setUserTheme("dark")
        }
    }, [isToggled])


    const onclickHandler = () => {
        handleModal(true)
    }

    return <Container theme={ThemeContextType}>
        <CustomButton onClick={onclickHandler}>
            <QuestionIcon/>
        </CustomButton>
        <Title theme={ThemeContextType}>WORDLE</Title>
        <ButtonsContainer>
            <CustomButton onClick={() => handleModalStats(true)}>
                <ChartIcon/>
            </CustomButton>
            <SwitchContainer>
                <Check checked={isToggled} onChange={() => setIsToggled(!isToggled)}></Check>
                <SwitchCustom className={"switch"}></SwitchCustom>
            </SwitchContainer>
        </ButtonsContainer>
    </Container>
}