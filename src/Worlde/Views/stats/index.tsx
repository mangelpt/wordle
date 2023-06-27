import {
    Container,
    Title,
    ExpectedWord,
    ExpectedNextWordContainer,
    NextWordContainer,
    PlaysContainer,
    PlaysWinsTitle,
    PlaysWinsNumber,
    ButtonAccept,
    Plays,
    Wins,
    NextWord,
    RemainingTime
} from "./styled.ts";
import React, {useContext} from "react";
import {UserPreferencesContext} from "../../context/userPreferencesContext.ts";

interface InstructionsProps {
    handleShowModalStats: React.Dispatch<React.SetStateAction<boolean>>
}

export const Stats = ({handleShowModalStats}: InstructionsProps) => {
    const {ThemeContextType} = useContext(UserPreferencesContext)
    const handleOnClick = () => {
        handleShowModalStats(false)
    }
    return <Container theme={ThemeContextType}>
        <Title theme={ThemeContextType}>Estadísticas</Title>
        <PlaysContainer theme={ThemeContextType}>
            <Plays>
                <PlaysWinsNumber theme={ThemeContextType}>8</PlaysWinsNumber>
                <PlaysWinsTitle theme={ThemeContextType}>Jugadas</PlaysWinsTitle>
            </Plays>
            <Wins>
                <PlaysWinsNumber theme={ThemeContextType}>2</PlaysWinsNumber>
                <PlaysWinsTitle theme={ThemeContextType}>Victorias</PlaysWinsTitle>
            </Wins>
        </PlaysContainer>
        <ExpectedNextWordContainer>
            <ExpectedWord theme={ThemeContextType}>La palabra era:
                <span>PERRO</span>
            </ExpectedWord>
            <NextWordContainer>
                <NextWord theme={ThemeContextType}>SIGUIENTE PALABRA</NextWord>
                <RemainingTime theme={ThemeContextType}>04:10</RemainingTime>
            </NextWordContainer>
        </ExpectedNextWordContainer>

        <ButtonAccept onClick={handleOnClick}>Aceptar</ButtonAccept>
    </Container>
}