import {createContext} from "react";

interface ContextProps {
    readonly ThemeContextType: "light" | "dark";
    readonly setUserTheme: (theme: "light" | "dark") => void;
}


export const UserPreferencesContext = createContext<ContextProps>({
    ThemeContextType: "light",
    setUserTheme: () => null,
})