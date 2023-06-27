import {Keyboard} from "../../Components/Keyboard";
import {Container, GameContainer} from "./styled.ts";
import {Header} from "../../Components/header";
import {Grid} from "../../Components/grid";
import {useContext, useState} from "react";
import {createPortal} from "react-dom";
import {Instructions} from "../instructions";
import {Stats} from "../stats";
import {UserPreferencesContext} from "../../context/userPreferencesContext.ts";


export const Game = () => {
    let userFirstTime: boolean;
    if (localStorage.getItem("isUserFirstLogin") === null) {
        userFirstTime = true
    } else {
        userFirstTime = false
    }
    const [showModalInstructions, setModalInstructions] = useState(userFirstTime);
    const [showModalStats, setModalStats] = useState(false);
    const {ThemeContextType} = useContext(UserPreferencesContext)



    return (<Container theme={ThemeContextType}>
        <GameContainer>
            <Header handleModal={setModalInstructions} handleModalStats={setModalStats}/>
            < Grid/>
            <Keyboard/>
        </GameContainer>
        {showModalStats && createPortal(<Stats handleShowModalStats={setModalStats}/>, document.body)}
        {(showModalInstructions || userFirstTime) && createPortal(<Instructions
            handleShowModal={setModalInstructions}/>, document.body)}
    </Container>)
}