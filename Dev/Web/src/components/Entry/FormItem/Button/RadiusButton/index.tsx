import * as Styled from "./style.ts"
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";

interface ButtonProps {
    content: string;
    onClick?: () => void;
}

export default function RadiusButton(props: ButtonProps) {
    return (
        <Styled.Container onClick={props.onClick}>
            <H1 color={theme.colorSystem.white} textAlign={"center"} text={props.content}></H1>
        </Styled.Container>
    )
}