import * as Styled from "./style.ts";
import FontProps from "@/interfaces/props/FontProps.ts";

export default function H4(props: FontProps) {
    return (
        <Styled.H4 color={props.color} textAlign={props.textAlign}>{props.text}</Styled.H4>
    )
}