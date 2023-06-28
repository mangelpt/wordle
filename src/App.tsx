import "./App.css";
import { WorldLayout } from "./Worlde";
import { useState } from "react";
import { UserPreferencesContext } from "./Worlde/context/userPreferencesContext.ts";
import { boardDefault } from "./Worlde/Components/DefaultBoard/Words.ts";
import { LetterContext } from "./Worlde/context/LetterContext.ts";

export const App = () => {
  const [board, setBoard] = useState(boardDefault);
  const [currentAttempt, setCurrentAttempt] = useState({
    attempt: 0,
    letterPosition: 0,
  });

  const [gameStats, setGameStats] = useState({
    wins: 0,
    gameNUmber: 0,
  });

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const setCurrentTheme = (theme: "light" | "dark") => {
    setTheme(theme);
  };

  const value = {
    ThemeContextType: theme,
    setUserTheme: setCurrentTheme,
  };

  const onSelect = (keyValue: string) => {
    if (currentAttempt.letterPosition > 4) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition] = keyValue;
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition + 1,
    });
  };

  const onDelete = () => {
    if (currentAttempt.letterPosition === 0) return;
    const newBoard = [...board];
    newBoard[currentAttempt.attempt][currentAttempt.letterPosition - 1] = "";
    setBoard(newBoard);
    setCurrentAttempt({
      ...currentAttempt,
      letterPosition: currentAttempt.letterPosition - 1,
    });
  };

  const onEnter = (Word: string) => {
    if (currentAttempt.letterPosition !== 5) return;
    let currentWord = "";
    for (let i = 0; i < 5; i++) {
      currentWord += board[currentAttempt.attempt][i];
    }
    setCurrentAttempt({
      attempt: currentAttempt.attempt + 1,
      letterPosition: 0,
    });
    if (currentWord === Word) {
      setGameStats({
        wins: gameStats.wins + 1,
        gameNUmber: currentAttempt.attempt + 1,
      });
    }
  };

  const LetterContextValue = {
    board: board,
    setBoard: setBoard,
    currentAttempt: currentAttempt,
    setCurrentAttempt: setCurrentAttempt,
    onSelect: onSelect,
    onDelete: onDelete,
    onEnter: onEnter,
    gameStats: gameStats,
    setGameStats: setGameStats,
  };

  return (
    <>
      <LetterContext.Provider value={LetterContextValue}>
        <UserPreferencesContext.Provider value={value}>
          <WorldLayout />
        </UserPreferencesContext.Provider>
      </LetterContext.Provider>
    </>
  );
};
