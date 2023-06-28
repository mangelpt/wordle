import { UseTimer } from "./useTimer.ts";
import { LetterContext } from "../context/LetterContext.ts";
import { useContext } from "react";

export const useGame = () => {
  const { remainingTime, startTimer, onClickReset, currentWord } = UseTimer();
  const {
    onEnter,
    onSelect,
    onDelete,
  } = useContext(LetterContext);

  const selectNewLetter = (keyValue: string , currentWord:string) => {
    if (keyValue === "ENTER") {
      onEnter(currentWord);
    } else if (keyValue === "⬅") {
      onDelete();
    } else {
      onSelect(keyValue);
    }
  };

  return {
    remainingTime,
    startTimer,
    onClickReset,
    currentWord,
    selectNewLetter,
  };
};
