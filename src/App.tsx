import './App.css'
import {WorldLayout} from "./Worlde";
import {useState} from "react";
import {UserPreferencesContext} from "./Worlde/context/userPreferencesContext.ts";

export const App = () => {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const setCurrentTheme = (theme: "light" | "dark") => {
        setTheme(theme)
    }

    const value = {
        ThemeContextType: theme,
        setUserTheme: setCurrentTheme
    }

    return (
        <>
            <UserPreferencesContext.Provider value={value}>
                <WorldLayout/>
            </UserPreferencesContext.Provider>
        </>

    )
}

