import {Route, Routes,} from "react-router-dom";
import {Game} from "./Views/game";
import {GameRoute} from "../routes/gameRoute.tsx";
import {Instructions} from "./Views/instructions";



export const WorldLayout = () => {

    return(
        <Routes>
            <Route path={GameRoute.game.play} element={<Game />} />
            <Route path={GameRoute.game.instructions} element={<Instructions />} />
        </Routes>
    )

}