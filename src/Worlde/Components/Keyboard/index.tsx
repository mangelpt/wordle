import  {useEffect} from "react";
import {ButtonCustom, Container} from "./styled.ts";

export const Keyboard = () => {
    const keys: string[] = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'ENTER','Z', 'X', 'C', 'V', 'B', 'N', 'M' ,'⬅️'
    ];

    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    const handleKeyDown = (e: any) => {
        console.log("here")
        console.log(e)
   /*     if (e.code === "Enter") {
            triggerBusqueda(e.target.value);
        }*/
    };

    return (
        <Container>
            {keys.map((key) => (
                <ButtonCustom tabIndex={0} key={key} onClick={() => handleKeyDown(key)}>
                    {key}
                </ButtonCustom>
            ))}
        </Container>
    );
};


