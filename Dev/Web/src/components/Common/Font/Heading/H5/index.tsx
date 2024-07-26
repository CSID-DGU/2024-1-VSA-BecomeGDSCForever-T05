import * as Styled from "./style.ts";
import FontProps from "@/interfaces/Common/Font/FontProps.ts";

export default function H5(props: FontProps) {
    return (
        <Styled.H5 color={props.color}>{props.text}</Styled.H5>
    )
}