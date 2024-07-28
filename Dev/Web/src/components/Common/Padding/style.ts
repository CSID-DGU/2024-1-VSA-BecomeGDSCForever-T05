import styled from "styled-components";

interface PaddingProps {
    horizontal?: string;
    vertical?: string;
    all?: string;
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
    width: 100%;
`;
