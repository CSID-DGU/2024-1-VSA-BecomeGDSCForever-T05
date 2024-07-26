import * as Styled from "./style.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export default function Sub3(props: FontProps) {
    return (
        <Styled.Sub3 color={props.color}>{props.text}</Styled.Sub3>
    )
}