import {Route, Routes,} from "react-router-dom";
import {Game} from "./Views/game";
import {GameRoute} from "../routes/gameRoute.tsx";





export const WorldLayout = () => {
    return(
        <Routes>
            <Route path={GameRoute.game.play} element={<Game />} />
        </Routes>
    )

}