import * as Styled from "./style.ts"
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";

interface ButtonProps {
    content: string;
}

export default function RectangleButton({ content }: ButtonProps) {
    return (
        <Styled.Container>
            <H1 color={theme.colorSystem.white} textAlign={"center"} text = {content}></H1>
        </Styled.Container>
    )
}