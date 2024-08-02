import * as Styled from "./style.ts"
import H6 from "@/components/Common/Font/Heading/H6";
import theme from "@/shared/theme.ts";

interface LabelProps {
    text?: string;
}

export default function Label({ text }: LabelProps) {
    return (
        <Styled.Container>
            <H6 color={theme.colorSystem.neutral["500"]} textAlign={"left"} text={text}/>
        </Styled.Container>
    )
}
