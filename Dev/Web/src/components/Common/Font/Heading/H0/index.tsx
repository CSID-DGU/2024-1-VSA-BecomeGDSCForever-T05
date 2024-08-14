import * as Styled from "./style.ts";
import FontProps from "@/interfaces/props/FontProps.ts";

export default function H0(props: FontProps) {
    return (
        <Styled.H0 color={props.color} textAlign={props.textAlign}>{props.text}</Styled.H0>
    )
}