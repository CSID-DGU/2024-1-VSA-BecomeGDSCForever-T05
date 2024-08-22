import * as Styled from './style.ts'
import H4 from "@/components/Common/Font/Heading/H4";
import theme from "@/shared/theme.ts";

interface props {
    title: string;
    onClick: () => void;
}

export default function Alert(props: props) {

    return (
        <Styled.Overlay onClick={props.onClick}>
            <Styled.Container onClick={(e) => e.stopPropagation()}>
                <H4 text={props.title} color={theme.colorSystem.neutral["900"]}/>
                <Styled.ButtonContainer>
                    <Styled.StyledButton onClick={props.onClick}>
                        <H4 text={"확인"} color={theme.colorSystem.white}/>
                    </Styled.StyledButton>
                </Styled.ButtonContainer>
            </Styled.Container>
        </Styled.Overlay>
    )
}