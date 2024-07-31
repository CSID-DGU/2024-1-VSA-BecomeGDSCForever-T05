import styled from "styled-components";

interface PaddingProps {
    horizontal?: string;
    vertical?: string;
    all?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
    borderRadius?: string;
    border?: string;
    borderColor?: string;
}

const calculatePadding = (props: PaddingProps) => {
    if (props.all) {
        return props.all;
    } else if (props.horizontal && props.vertical) {
        return `${props.vertical} ${props.horizontal}`;
    } else if (props.horizontal) {
        return `0 ${props.horizontal}`;
    } else if (props.vertical) {
        return `${props.vertical} 0`;
    } else {
        return "0";
    }
}

export const Padding = styled.div<PaddingProps>`
    padding: ${(props) => calculatePadding(props)};
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "100%"};
    background-color: ${(props) => props.backgroundColor || "transparent"};
    border-radius: ${(props) => props.borderRadius || "0"};
    border: ${(props) => props.border || "none"};
    border-color: ${(props) => props.borderColor || "transparent"};
`;
