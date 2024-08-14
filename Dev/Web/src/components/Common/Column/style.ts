import styled from "styled-components";
import React from "react";

interface ColumnProps {
    children: React.ReactNode;
    justifyContent?: string;
    alignItems?: string;
    width?: string;
}

export const Column = styled.div<ColumnProps>`
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => props.justifyContent || "flex-start"};
    align-items: ${(props) => props.alignItems || "flex-start"};
    width: ${(props) => props.width || "100%"};
`;