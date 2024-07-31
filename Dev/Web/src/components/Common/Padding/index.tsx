import * as Styled from "./style";
import React from "react";

interface PaddingProps {
    horizontal?: string;
    vertical?: string;
    all?: string;
    children?: React.ReactNode;
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
    border?: string;
    borderColor?: string;
}

export default function Padding(props: PaddingProps) {
    return (
        <Styled.Padding horizontal={props.horizontal} vertical={props.vertical} all={props.all} width={props.width}
                        height={props.height} borderColor={props.borderColor} border={props.border}
                        backgroundColor={props.backgroundColor} borderRadius={props.borderRadius}>
            {props.children}
        </Styled.Padding>
    )
}