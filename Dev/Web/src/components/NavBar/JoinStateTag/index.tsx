import * as Styled from "./style.ts"
import H3 from "@/components/Common/Font/Heading/H3";
import theme from "@/shared/theme.ts";

interface joinStateProps {
    text?: string;
}

export default function JoinStateTag(props: joinStateProps) {
    return (
        <Styled.Container>
            <H3 text={props.text} color={theme.colorSystem.white}/>
        </Styled.Container>

    )

}