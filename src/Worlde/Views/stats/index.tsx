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
  RemainingTime,
} from "./styled.ts";
import React, { useContext } from "react";
import { UserPreferencesContext } from "../../context/userPreferencesContext.ts";
import { LetterContext } from "../../context/LetterContext.ts";
import {useNavigate} from "react-router-dom";

interface InstructionsProps {
  handleShowModalStats: React.Dispatch<React.SetStateAction<boolean>>;
  remainingTime: string;
  currentWord: string;
}

export const Stats = ({
  handleShowModalStats,
  remainingTime,
  currentWord,
}: InstructionsProps) => {
  const { ThemeContextType } = useContext(UserPreferencesContext);
  const { currentAttempt, setCurrentAttempt, gameStats, setGameStats } =
    useContext(LetterContext);
  const navigate = useNavigate();

  const handleOnClick = () => {
    if (currentAttempt.attempt === 5) {
      setCurrentAttempt({
        attempt: currentAttempt.attempt - 1,
        letterPosition: currentAttempt.letterPosition,
      });
      navigate(0)
    }
    if (gameStats.wins !== 0) {
      setGameStats({ wins: 0, gameNUmber: 0 });
    }
    handleShowModalStats(false);
  };

  return (
    <Container theme={ThemeContextType}>
      <Title theme={ThemeContextType}>Estadísticas</Title>
      <PlaysContainer theme={ThemeContextType}>
        <Plays>
          <PlaysWinsNumber theme={ThemeContextType}>
            {currentAttempt.attempt}
          </PlaysWinsNumber>
          <PlaysWinsTitle theme={ThemeContextType}>Jugadas</PlaysWinsTitle>
        </Plays>
        <Wins>
          <PlaysWinsNumber theme={ThemeContextType}>
            {gameStats?.wins}
          </PlaysWinsNumber>
          <PlaysWinsTitle theme={ThemeContextType}>Victorias</PlaysWinsTitle>
        </Wins>
      </PlaysContainer>
      <ExpectedNextWordContainer>
        {currentAttempt.attempt === 5 && (
          <ExpectedWord theme={ThemeContextType}>
            La palabra era:
            <span>{currentWord}</span>
          </ExpectedWord>
        )}
        <NextWordContainer>
          <NextWord theme={ThemeContextType}>SIGUIENTE PALABRA</NextWord>
          <RemainingTime theme={ThemeContextType}>
            {remainingTime}
          </RemainingTime>
        </NextWordContainer>
      </ExpectedNextWordContainer>

      <ButtonAccept onClick={handleOnClick}>Aceptar</ButtonAccept>
    </Container>
  );
};
