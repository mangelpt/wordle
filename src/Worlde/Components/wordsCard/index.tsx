import {Container} from "./styled.ts";
import React from "react";
import {CardProps} from "./types.ts";

interface Props extends CardProps {
    children: React.ReactNode
}

export const WordsCard = ({children, correct, incorrect, empty}: Props) => {

    return <Container correct={correct} empty={empty} incorrect={incorrect}>
        {children}
    </Container>
}