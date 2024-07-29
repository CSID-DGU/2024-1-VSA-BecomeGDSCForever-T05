import * as Styled from "./style.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export default function H1(props: FontProps) {
    return (
        <Styled.H1 color={props.color} textAlign={props.textAlign}>{props.text}</Styled.H1>
    )
}