import React, { createContext } from "react";

interface LetterContextProps {
  readonly board: string[][];
  readonly setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
  readonly currentAttempt: { attempt: number; letterPosition: number };
  readonly setCurrentAttempt: React.Dispatch<
    React.SetStateAction<{ attempt: number; letterPosition: number }>
  >;
  readonly onSelect: (keyValue: string) => void;
  readonly onDelete: () => void;
  readonly onEnter: (Word:string) => void;
  readonly setGameStats: React.Dispatch<
    React.SetStateAction<{ wins: number; gameNUmber: number }>
  >;
  readonly gameStats: { wins: number; gameNUmber: number };
}

export const LetterContext = createContext<LetterContextProps>({
  currentAttempt: { attempt: 0, letterPosition: 0 },
  setCurrentAttempt: () => null,
  board: [],
  setBoard: () => null,
  onDelete: () => null,
  onEnter: () => null,
  onSelect: () => null,
  setGameStats: () => null,
  gameStats: { wins: 0, gameNUmber: 0 },
});
