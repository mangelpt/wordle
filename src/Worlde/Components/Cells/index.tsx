import {Container} from "./styled.ts";
import {useContext} from "react";
import {CardProps} from "./types.ts";
import {LetterContext} from "../../context/LetterContext.ts";
import {UserPreferencesContext} from "../../context/userPreferencesContext.ts";

interface Props extends CardProps {
    position?: number;
    attempt?: number;
}

export const BoardCells = ({correct, incorrect, empty, border, attempt, position}: Props) => {
    const {ThemeContextType} = useContext(UserPreferencesContext)
    const {board} = useContext(LetterContext);
    const letter = board[attempt!][position!]

    return <Container
        theme={ThemeContextType}
        border={border}
        correct={correct}
        empty={empty}
        incorrect={incorrect}>
        {letter}
    </Container>
}