import * as Styled from "./style";
import React from "react";

interface RowProps {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
}

export default function Row(props: RowProps) {
    return (
        <Styled.Row justifyContent={props.justifyContent} alignItems={props.alignItems} width={props.width}>
            {props.children}
        </Styled.Row>
    )
}