import * as Styled from "./style.ts";
import FontProps from "@/interfaces/props/FontProps.ts";

export default function H6(props: FontProps) {
    return (
        <Styled.H6 color={props.color} textAlign={props.textAlign}>{props.text}</Styled.H6>
    )
}