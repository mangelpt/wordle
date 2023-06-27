import './App.css'
import {WorldLayout} from "./Worlde";
import {useState} from "react";
import {UserPreferencesContext} from "./Worlde/context/userPreferencesContext.ts";
import {boardDefault} from "./Worlde/Components/DefaultBoard/Words.ts";
import {LetterContext} from "./Worlde/context/LetterContext.ts";

export const App = () => {
    const [board, setBoard] = useState(boardDefault);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const setCurrentTheme = (theme: "light" | "dark") => {
        setTheme(theme)
    }

    const value = {
        ThemeContextType: theme,
        setUserTheme: setCurrentTheme
    }

    const LetterContextValue = {
        board: board,
        setBoard: setBoard
    }

    return (
        <>
            <LetterContext.Provider value={LetterContextValue}>
                <UserPreferencesContext.Provider value={value}>
                    <WorldLayout/>
                </UserPreferencesContext.Provider>
            </LetterContext.Provider>

        </>

    )
}

