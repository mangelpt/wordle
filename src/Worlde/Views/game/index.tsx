import {Keyboard} from "../../Components/Keyboard";
import {Container, GameContainer} from "./styled.ts";
import {Header} from "../../Components/header";
import {Grid} from "../../Components/grid";

export const Game = () => {
    return (<Container>
        <GameContainer>
            <Header/>
            < Grid/>
            <Keyboard/>
        </GameContainer>
    </Container>)
}