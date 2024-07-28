import React from "react";
import * as Styled from "./style";

interface ColumnProps {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
}

export default function Column(props: ColumnProps) {
    return (
        <Styled.Column justifyContent={props.justifyContent} alignItems={props.alignItems}>
            {props.children}
        </Styled.Column>
    )
}