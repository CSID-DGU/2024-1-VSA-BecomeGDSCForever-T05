import * as Styled from "./style.ts";
import FontProps from "@/interfaces/props/FontProps.ts";

export default function H5(props: FontProps) {
    return (
        <Styled.H5 color={props.color} textAlign={props.textAlign}>{props.text}</Styled.H5>
    )
}