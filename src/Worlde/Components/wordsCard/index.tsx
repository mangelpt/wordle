import {Container} from "./styled.ts";
import React from "react";
import {CardProps} from "./types.ts";

interface Props extends CardProps {
    children: React.ReactNode
}

export const WordsCard = ({children, correct, incorrect, empty, border}: Props) => {

    return <Container
        border={border}
        correct={correct}
        empty={empty}
        incorrect={incorrect}>
        {children}
    </Container>
}