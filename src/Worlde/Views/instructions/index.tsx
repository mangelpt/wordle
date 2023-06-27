import {
    Button,
    Container,
    DescriptionContainer,
    Title,
    WordCardContainer,
    Wording,
    WordingContainer,
    Cells
} from "./styled.ts";

import React, {useContext} from "react";
import {UserPreferencesContext} from "../../context/userPreferencesContext.ts";

interface InstructionsProps {
    handleShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Instructions = ({handleShowModal}: InstructionsProps) => {
    const {ThemeContextType} = useContext(UserPreferencesContext)
    const onClickHandler = () => {
        handleShowModal(false);
        localStorage.setItem("isUserFirstLogin", "false")
    }

    return (<Container theme={ThemeContextType}>
        <Title theme={ThemeContextType}>Cómo jugar</Title>
        <DescriptionContainer theme={ThemeContextType}>
            <Wording theme={ThemeContextType}>
                Adivina la palabra oculta en cinco intentos.
            </Wording>
            <Wording theme={ThemeContextType}>
                Cada intento debe ser una palabra válida de 5 letras.
            </Wording>
            <Wording theme={ThemeContextType}>
                Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la
                palabra.
            </Wording>
        </DescriptionContainer>
        <Wording bold={true} fontSize={"19px"} theme={ThemeContextType}>
            Ejemplos
        </Wording>
        <WordCardContainer>
            <Cells border={true} correct={true}>G</Cells>
            <Cells border={true}>A</Cells>
            <Cells border={true}>T</Cells>
            <Cells border={true}>O</Cells>
            <Cells border={true}>S</Cells>
        </WordCardContainer>
        <Wording theme={ThemeContextType}>
            La letra <b>G</b> está en la palabra y en la posición correcta.
        </Wording>
        <WordCardContainer>
            <Cells border={true}>V</Cells>
            <Cells border={true}>O</Cells>
            <Cells incorrect={true}>C</Cells>
            <Cells border={true}>A</Cells>
            <Cells border={true}>L</Cells>
        </WordCardContainer>
        <Wording theme={ThemeContextType}>
            La letra <b>C</b> está en la palabra pero en la posición incorrecta.
        </Wording>
        <WordCardContainer>
            <Cells border={true}>C</Cells>
            <Cells border={true}>A</Cells>
            <Cells border={true}>N</Cells>
            <Cells border={true}>T</Cells>
            <Cells border={true} empty={true}>O</Cells>
        </WordCardContainer>
        <Wording theme={ThemeContextType}>
            La letra <b>O</b> no está en la palabra.
        </Wording>
        <WordingContainer>
            <Wording theme={ThemeContextType}>
                Puede haber letras repetidas.
                Las pistas son independientes para cada letra.
            </Wording>
        </WordingContainer>
        <WordingContainer>
            <Wording theme={ThemeContextType}>
                ¡Una palabra nueva cada 5 minutos!
            </Wording>
        </WordingContainer>
        <Button onClick={onClickHandler}>!JUGAR¡</Button>
    </Container>)
}

