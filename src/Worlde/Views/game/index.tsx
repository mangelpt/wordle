import {Keyboard} from "../../Components/Keyboard";
import {Container, GameContainer} from "./styled.ts";
import {Header} from "../../Components/header";

export const Game = () => {
    return (<Container>
        <GameContainer>
            <Header/>
            <Keyboard/>
        </GameContainer>
    </Container>)
}