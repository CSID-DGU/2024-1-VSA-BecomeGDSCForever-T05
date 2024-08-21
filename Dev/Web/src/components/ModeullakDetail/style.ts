import styled from "styled-components";

export const Container = styled.div`
    z-index: 1000; /* 높은 z-index로 설정 */
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
`;

// Svg Button
interface SvgButtonProps {
    src: string;
    width?: string;
    height?: string;
    color?: string;
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
    position?: string;
}

export const SvgButton = styled.button<SvgButtonProps>`
    background-image: url(${(props) => props.src});
    background-size: cover;
    width: ${(props) => props.width || "24px"};
    height: ${(props) => props.height || "24px"};
    background-color: ${(props) => props.color || "transparent"};
    top: ${(props) => props.top || "0"};
    right: ${(props) => props.right || "0"};
    bottom: ${(props) => props.bottom || "0"};
    left: ${(props) => props.left || "0"};
    border: none;

    cursor: pointer;
`;

interface props {
    color?: string;
}

export const Line = styled.div<props>`
    width: 100%;
    height: 1px;
    background-color: ${(props) => props.color || "#f1f1f1"};
`;