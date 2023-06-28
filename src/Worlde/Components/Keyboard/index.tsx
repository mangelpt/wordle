import { useCallback, useContext, useEffect } from "react";
import { ButtonCustom, Container } from "./styled.ts";
import { UserPreferencesContext } from "../../context/userPreferencesContext.ts";
import { LetterContext } from "../../context/LetterContext.ts";

interface Props {
  selectNewLetter: (keyValue: string , word: any) => void;
  currentWord: string;
}

export const Keyboard = ({ selectNewLetter, currentWord }: Props) => {
  const { ThemeContextType } = useContext(UserPreferencesContext);
  const { onEnter, onDelete, onSelect } = useContext(LetterContext);

  const keys: string[] = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "ENTER",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "⬅",
  ];

  const HandleKeyboard = useCallback(
    (event: any) => {
      if (event.key === "Enter") {
        onEnter(currentWord);
      } else if (event.key === "Backspace") {
        onDelete();
      } else {
        keys.forEach((key: any) => {
          if (event.key.toUpperCase() === key) {
            onSelect(key);
          }
        });
      }
    },
    [keys]
  );

  useEffect(() => {
    window.addEventListener("keydown", HandleKeyboard);

    return () => {
      window.removeEventListener("keydown", HandleKeyboard);
    };
  }, [HandleKeyboard]);

  const handleKeyDown = (e: any) => {
    selectNewLetter(e,currentWord);
  };

  return (
    <Container theme={ThemeContextType}>
      {keys.map((key) => (
        <ButtonCustom
          theme={ThemeContextType}
          tabIndex={0}
          key={key}
          onClick={() => handleKeyDown(key)}
        >
          {key}
        </ButtonCustom>
      ))}
    </Container>
  );
};
