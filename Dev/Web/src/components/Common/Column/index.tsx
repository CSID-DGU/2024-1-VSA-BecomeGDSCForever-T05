import React from "react";
import * as Styled from "./style";

interface ColumnProps {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
}

export default function Column(props: ColumnProps) {
    return (
        <Styled.Column justifyContent={props.justifyContent} alignItems={props.alignItems} width={props.width}>
            {props.children}
        </Styled.Column>
    )
}