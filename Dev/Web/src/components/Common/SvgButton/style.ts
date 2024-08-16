import styled from "styled-components";
import {SvgButtonProps} from "@/interfaces/props/SvgButtonProps.ts";

export const SvgButton = styled.button<SvgButtonProps>`
    background-image: url(${(props) => props.src});
    background-size: cover;
    width: ${(props) => props.width || "16px"};
    height: ${(props) => props.height || "16px"};
    background-color: ${(props) => props.color || "transparent"};
    top: ${(props) => props.top || "0"};
    right: ${(props) => props.right || "0"};
    bottom: ${(props) => props.bottom || "0"};
    left: ${(props) => props.left || "0"};
    border: none;

    cursor: pointer;
`;
