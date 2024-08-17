import * as Styled from "./style.ts"
import theme from "@/shared/theme.ts";
import H1 from "@/components/Common/Font/Heading/H1";

interface props {
    content: string;
    isIssued: boolean;
    onClick: () => void
}

export default function RectangleButton(props: props) {


    return (
        <Styled.Container
            backgroundColor={props.isIssued ? theme.colorSystem.primary["500"] : theme.colorSystem.neutral["200"]}
            isIssued={props.isIssued}
            onClick={props.onClick}
        >
            <H1 color={theme.colorSystem.white} textAlign={"center"}
                text={props.content}></H1>
        </Styled.Container>
    )
}