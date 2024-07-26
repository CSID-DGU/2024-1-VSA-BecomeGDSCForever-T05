import * as Styled from "./style.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export default function Sub2(props: FontProps) {
    return (
        <Styled.Sub2 color={props.color}>{props.text}</Styled.Sub2>
    )
}