import {
    Button,
    Container,
    DescriptionContainer,
    Title,
    WordCardContainer,
    Wording,
    WordingContainer
} from "./styled.ts";
import {WordsCard} from "../../Components/wordsCard";

interface InstructionsProps {
    handleShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const Instructions = ({handleShowModal}: InstructionsProps) => {

    const onClickHandler = () => {
        handleShowModal(false);
        localStorage.setItem("isUserFirstLogin", "false")
    }

    return (<Container>
        <Title>Cómo jugar</Title>
        <DescriptionContainer>
            <Wording>
                Adivina la palabra oculta en cinco intentos.
            </Wording>
            <Wording>
                Cada intento debe ser una palabra válida de 5 letras.
            </Wording>
            <Wording>
                Después de cada intento el color de las letras cambia para mostrar qué tan cerca estás de acertar la
                palabra.
            </Wording>
        </DescriptionContainer>
        <Wording bold={true} fontSize={"19px"}>
            Ejemplos
        </Wording>
        <WordCardContainer>
            <WordsCard border={true} correct={true}>G</WordsCard>
            <WordsCard border={true}>A</WordsCard>
            <WordsCard border={true}>T</WordsCard>
            <WordsCard border={true}>O</WordsCard>
            <WordsCard border={true}>S</WordsCard>
        </WordCardContainer>
        <Wording>
            La letra <b>G</b> está en la palabra y en la posición correcta.
        </Wording>
        <WordCardContainer>
            <WordsCard border={true}>V</WordsCard>
            <WordsCard border={true}>O</WordsCard>
            <WordsCard incorrect={true}>C</WordsCard>
            <WordsCard border={true}>A</WordsCard>
            <WordsCard border={true}>L</WordsCard>
        </WordCardContainer>
        <Wording>
            La letra <b>C</b> está en la palabra pero en la posición incorrecta.
        </Wording>
        <WordCardContainer>
            <WordsCard border={true}>C</WordsCard>
            <WordsCard border={true}>A</WordsCard>
            <WordsCard border={true}>N</WordsCard>
            <WordsCard border={true}>T</WordsCard>
            <WordsCard border={true} empty={true}>O</WordsCard>
        </WordCardContainer>
        <Wording>
            La letra <b>O</b> no está en la palabra.
        </Wording>
        <WordingContainer>
            <Wording>
                Puede haber letras repetidas.
                Las pistas son independientes para cada letra.
            </Wording>
        </WordingContainer>
        <WordingContainer>
            <Wording>
                ¡Una palabra nueva cada 5 minutos!
            </Wording>
        </WordingContainer>
        <Button onClick={onClickHandler}>!JUGAR¡</Button>
    </Container>)
}

