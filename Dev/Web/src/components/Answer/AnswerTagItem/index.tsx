import * as Styled from './style.ts'
import Sub3 from "@/components/Common/Font/Body/Sub3";
import theme from "@/shared/theme.ts";

interface props {
    color?: string;
    text?: string;
}

export default function AnswerTagItem(props: props) {
    return (
        <Styled.Container color={props.color}>
            <Sub3 color={theme.colorSystem.black} text={props.text}/>
        </Styled.Container>
    )
}