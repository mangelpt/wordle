import { Keyboard } from "../../Components/Keyboard";
import { Container, GameContainer } from "./styled.ts";
import { Header } from "../../Components/header";
import { Grid } from "../../Components/Board";
import { useContext, useState } from "react";
import { createPortal } from "react-dom";
import { Instructions } from "../instructions";
import { Stats } from "../stats";
import { UserPreferencesContext } from "../../context/userPreferencesContext.ts";
import { useGame } from "../../hooks/useGame.ts";

export const Game = () => {
  let userFirstTime: boolean;
  if (localStorage.getItem("isUserFirstLogin") === null) {
    userFirstTime = true;
  } else {
    userFirstTime = false;
  }
  const [showModalInstructions, setModalInstructions] = useState(userFirstTime);
  const [showModalStats, setModalStats] = useState(false);
  const { ThemeContextType } = useContext(UserPreferencesContext);
  const { remainingTime, currentWord,selectNewLetter } = useGame();

  console.log("remainingTime", remainingTime);

  return (
    <Container theme={ThemeContextType}>
      <GameContainer>
        <Header
          handleModal={setModalInstructions}
          handleModalStats={setModalStats}
        />
        <Grid />
        <Keyboard  selectNewLetter={selectNewLetter}/>
      </GameContainer>
      {showModalStats &&
        createPortal(
          <Stats
            handleShowModalStats={setModalStats}
            remainingTime={remainingTime}
            currentWord={currentWord}
          />,
          document.body
        )}
      {(showModalInstructions || userFirstTime) &&
        createPortal(
          <Instructions handleShowModal={setModalInstructions} />,
          document.body
        )}
    </Container>
  );
};
