import * as Styled from "./style.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export default function Sub1(props: FontProps) {
    return (
        <Styled.Sub1 color={props.color} textAlign={props.textAlign}>{props.text}</Styled.Sub1>
    )
}