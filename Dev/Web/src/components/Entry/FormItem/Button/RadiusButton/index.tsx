import * as Styled from "./style.ts"
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";

interface ButtonProps {
    content: string;
    isValid: boolean;
    onClick?: () => void;
}

export default function RadiusButton(props: ButtonProps) {
    return (
        <Styled.Container onClick={props.onClick} isValid={props.isValid}
                          backgroundColor={props.isValid ? theme.colorSystem.primary["500"] : theme.colorSystem.neutral["200"]}>
            <H1 color={theme.colorSystem.white} textAlign={"center"} text={props.content}></H1>
        </Styled.Container>
    )
}