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

export const Instructions = () => {
    return <Container>
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
            <WordsCard correct={true}>G</WordsCard>
            <WordsCard>A</WordsCard>
            <WordsCard>T</WordsCard>
            <WordsCard>O</WordsCard>
            <WordsCard>S</WordsCard>
        </WordCardContainer>
        <Wording>
            La letra <b>G</b> está en la palabra y en la posición correcta.
        </Wording>
        <WordCardContainer>
            <WordsCard>V</WordsCard>
            <WordsCard>O</WordsCard>
            <WordsCard incorrect={true}>C</WordsCard>
            <WordsCard>A</WordsCard>
            <WordsCard>L</WordsCard>
        </WordCardContainer>
        <Wording>
            La letra <b>C</b> está en la palabra pero en la posición incorrecta.
        </Wording>
        <WordCardContainer>
            <WordsCard>C</WordsCard>
            <WordsCard>A</WordsCard>
            <WordsCard>N</WordsCard>
            <WordsCard>T</WordsCard>
            <WordsCard empty={true}>O</WordsCard>
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
        <Button>!JUGAR¡</Button>
    </Container>
}

