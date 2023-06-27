import React, {createContext} from "react";

interface LetterContextProps {
    readonly board: string[][];
    readonly setBoard: React.Dispatch<React.SetStateAction<string[][]>>
}


export const LetterContext = createContext<LetterContextProps>({
    board: [],
    setBoard: () => null
})