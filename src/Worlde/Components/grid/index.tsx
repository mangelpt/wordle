import {Cells, Column, Container} from "./styled.ts";
import {WordsCard} from "../wordsCard";


export const Grid = () => {
    return <Container>
        <Column>
            <Cells> <WordsCard>V</WordsCard></Cells>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
        </Column>
        <Column>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
        </Column>
        <Column>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
        </Column>
        <Column>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
        </Column>
        <Column>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
            <Cells></Cells>
        </Column>
    </Container>
}