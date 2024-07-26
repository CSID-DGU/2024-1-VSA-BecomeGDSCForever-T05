import * as Styled from "./style.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export default function H4(props: FontProps) {
    return (
        <Styled.H4 color={props.color}>{props.text}</Styled.H4>
    )
}