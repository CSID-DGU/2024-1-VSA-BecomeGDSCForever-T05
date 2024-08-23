import styled from "styled-components";
import React from "react";

interface RowProps {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
    gap?: string;
}

export const Row = styled.div<RowProps>`
    display: flex;
    flex-direction: row;
    justify-content: ${(props) => props.justifyContent || "flex-start"};
    align-items: ${(props) => props.alignItems || "flex-start"};
    width: ${(props) => props.width || "100%"};
    gap: ${(props) => props.gap || "0"};
`;