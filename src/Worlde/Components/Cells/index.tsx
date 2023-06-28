import { Container } from "./styled.ts";
import { useContext } from "react";
import { LetterContext } from "../../context/LetterContext.ts";
import { UserPreferencesContext } from "../../context/userPreferencesContext.ts";

interface Props {
  position?: number;
  attempt?: number;
  correctWord: string;
}

export const Cells = ({ attempt, position, correctWord }: Props) => {
  const { ThemeContextType } = useContext(UserPreferencesContext);
  const { board, currentAttempt } = useContext(LetterContext);
  const letter = board[attempt!][position!];

  const correct: boolean = correctWord[position!] === letter;
  const incorrect: boolean =
    !correct && letter !== "" && correctWord.includes(letter);
  const empty: boolean =
    currentAttempt.attempt > attempt! && (!correct || !incorrect)
      ? true
      : false;

  return (
    <Container
      theme={ThemeContextType}
      border={false}
      correct={correct}
      empty={empty}
      incorrect={incorrect}
    >
      {letter}
    </Container>
  );
};
