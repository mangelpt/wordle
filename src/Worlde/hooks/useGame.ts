import { UseTimer } from "./useTimer.ts";
import { LetterContext } from "../context/LetterContext.ts";
import { useContext } from "react";

export const useGame = () => {
  const { remainingTime, startTimer, onClickReset, currentWord } = UseTimer();
  const { board, setBoard } = useContext(LetterContext);

  const selectNewLetter = (keyValue: string) => {
    const newBoard = [...board];
    newBoard[0][0] = keyValue;
    setBoard(newBoard);
  };

  return {
    remainingTime,
    startTimer,
    onClickReset,
    currentWord,
    selectNewLetter
  };
};
