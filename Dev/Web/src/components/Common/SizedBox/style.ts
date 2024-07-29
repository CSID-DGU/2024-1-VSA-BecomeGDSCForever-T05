import styled from "styled-components";

interface SizedBoxProps {
    width?: string;
    height?: string;
}

export const SizedBox = styled.div<SizedBoxProps>`
    width: ${(props) => props.width || "0px"};
    height: ${(props) => props.height || "0px"};
`;