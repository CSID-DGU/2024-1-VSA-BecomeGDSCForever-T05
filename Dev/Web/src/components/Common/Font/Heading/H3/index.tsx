import * as Styled from "./style.ts";
import FontProps from "@/interfaces/props/FontProps.ts";

export default function H3(props: FontProps) {
    return (
        <Styled.H3 color={props.color} textAlign={props.textAlign}>{props.text}</Styled.H3>
    )
}