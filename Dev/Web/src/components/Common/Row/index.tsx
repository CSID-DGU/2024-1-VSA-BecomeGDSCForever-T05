import * as Styled from "./style";
import React from "react";

interface RowProps {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
    onClick?: () => void;
    gap?: string;
}

export default function Row(props: RowProps) {
    return (
        <Styled.Row justifyContent={props.justifyContent} alignItems={props.alignItems} width={props.width}
                    onClick={props.onClick} gap={props.gap}>
            {props.children}
        </Styled.Row>
    )
}