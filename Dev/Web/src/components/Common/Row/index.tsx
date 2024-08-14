import * as Styled from "./style";
import React from "react";

interface RowProps {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    onClick?: () => void;
}

export default function Row(props: RowProps) {
    return (
        <Styled.Row justifyContent={props.justifyContent} alignItems={props.alignItems} onClick={props.onClick}>
            {props.children}
        </Styled.Row>
    )
}