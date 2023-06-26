import {Container, SwitchContainer, Title, CustomButton, Check, SwitchCustom, ButtonsContainer} from "./styled.ts";
import {ChartIcon, QuestionIcon} from "../../../assets/Icons/icons.tsx";
import {useState} from "react";


export const Header = () => {
    const [isToggled, setIsToggled] = useState(true);

    return <Container>
        <CustomButton>
            <QuestionIcon/>
        </CustomButton>
        <Title>WORDLE</Title>
        <ButtonsContainer>
            <CustomButton>
                <ChartIcon/>
            </CustomButton>
            <SwitchContainer>
                <Check checked={isToggled} onChange={() => setIsToggled(!isToggled)}></Check>
                <SwitchCustom className={"switch"}></SwitchCustom>
            </SwitchContainer>
        </ButtonsContainer>
    </Container>
}