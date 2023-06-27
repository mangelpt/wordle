import {Keyboard} from "../../Components/Keyboard";
import {Container, GameContainer} from "./styled.ts";
import {Header} from "../../Components/header";
import {Grid} from "../../Components/grid";
import {useState} from "react";
import {createPortal} from "react-dom";
import {Instructions} from "../instructions";

export const Game = () => {
    let userFirstTime: boolean;
    if (localStorage.getItem("isUserFirstLogin") === null) {
        userFirstTime = true
    } else {
        userFirstTime = false
    }
    const [showModalInstructions, setModalInstructions] = useState(userFirstTime);


    console.log("isFirstLogin", userFirstTime)
    console.log("showModalInstructions", showModalInstructions)

    return (<Container>
        <GameContainer>
            <Header handleModal={setModalInstructions}/>
            < Grid/>
            <Keyboard/>
        </GameContainer>
        {(showModalInstructions || userFirstTime) && createPortal(<Instructions
            handleShowModal={setModalInstructions}/>, document.body)}
    </Container>)
}